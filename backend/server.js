require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dashboardRoutes = require('./routes/dashboardRoutes');
const authRoutes = require('./routes/authRoutes');



const app = express();

app.use('/api/dashboard', dashboardRoutes);


// ✅ Corrected Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json()); // ✅ FIXED
app.use(cookieParser());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// ✅ Error Handling
app.use((err, req, res, next) => {
  console.error('🔥 Server Error:', err.message);
  res.status(500).json({ message: 'Internal Server Error' });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
