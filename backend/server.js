require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // No need for extra options
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

connectDB();

// ✅ User Schema & Model
const UserSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true }, // Ensure email is unique
  password: String,
});

const User = mongoose.model("User", UserSchema);
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// 🚀 REGISTER API
app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ message: "All fields are required!" });

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists!" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "✅ User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error });
  }
});

// 🚀 LOGIN API
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "All fields are required!" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "❌ User not found!" });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(400).json({ message: "❌ Invalid credentials!" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ message: "❌ Server error", error });
  }
});

// 🚀 PROTECTED DASHBOARD ROUTE
app.get("/dashboard", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found!" });

    res.json({ username: user.username });
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
