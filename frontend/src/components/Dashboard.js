// import React, { useState } from "react";

// // Reusable Button Component
// const Button = ({ label, onClick, className }) => {
//   return (
//     <button
//       className={`bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 ${className}`}
//       onClick={onClick}
//     >
//       {label}
//     </button>
//   );
// };

// // Reusable Input Component
// const Input = ({ label, value, onChange, type = "text" }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-gray-700">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         className="w-full px-4 py-2 border rounded-md"
//       />
//     </div>
//   );
// };

// // Tracker Card Component
// const TrackerCard = ({ title, value, color }) => {
//   return (
//     <div
//       className={`p-4 rounded-md shadow-md ${color} flex flex-col items-center justify-center`}
//     >
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <p className="text-2xl font-bold">{value}</p>
//     </div>
//   );
// };

// // Meal Item Component
// const MealItem = ({ mealType, mealDetails }) => {
//   return (
//     <li className="flex justify-between border-b py-2">
//       <span>{mealType}</span>
//       <span>{mealDetails}</span>
//     </li>
//   );
// };

// // Meal Section Component
// const MealSection = ({ title, meals }) => {
//   return (
//     <section className="mt-8">
//       <div className="p-6 bg-white rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">{title}</h2>
//         <ul>
//           {meals.map((meal, index) => (
//             <MealItem
//               key={index}
//               mealType={meal.mealType}
//               mealDetails={meal.mealDetails}
//             />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// // Activity Log Item Component
// const ActivityLogItem = ({ time, activity }) => {
//   return (
//     <li className="flex justify-between border-b py-2 text-gray-700">
//       <span>{time}</span>
//       <span>{activity}</span>
//     </li>
//   );
// };

// // Activity Log Section Component
// const ActivityLogSection = ({ logs }) => {
//   return (
//     <section className="mt-8">
//       <div className="p-6 bg-white rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Activity Logs</h2>
//         <ul>
//           {logs.map((log, index) => (
//             <ActivityLogItem key={index} time={log.time} activity={log.activity} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };

// // Profile Section Component
// const ProfileSection = ({ user }) => {
//   return (
//     <section className="mt-8">
//       <div className="p-6 bg-white rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Profile</h2>
//         <div className="flex items-center space-x-4">
//           <img
//             src={user.avatar}
//             alt="User Avatar"
//             className="w-16 h-16 rounded-full"
//           />
//           <div>
//             <h3 className="text-lg font-semibold">{user.name}</h3>
//             <p className="text-gray-600">{user.email}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// // Settings Section Component
// const SettingsSection = ({ settings, onChange }) => {
//   return (
//     <section className="mt-8">
//       <div className="p-6 bg-white rounded-md shadow-md">
//         <h2 className="text-xl font-bold mb-4">Settings</h2>
//         <form>
//           <Input
//             label="Daily Calorie Goal"
//             value={settings.calorieGoal}
//             onChange={(e) => onChange("calorieGoal", e.target.value)}
//             type="number"
//           />
//           <Input
//             label="Daily Water Intake Goal (oz)"
//             value={settings.waterGoal}
//             onChange={(e) => onChange("waterGoal", e.target.value)}
//             type="number"
//           />
//           <Button label="Save Settings" onClick={() => alert("Settings Saved!")} />
//         </form>
//       </div>
//     </section>
//   );
// };

// // Dashboard Component
// const Dashboard = () => {
//   const [selectedMealType, setSelectedMealType] = useState("veg");
//   const [settings, setSettings] = useState({
//     calorieGoal: 2000,
//     waterGoal: 6,
//   });

//   const trackers = [
//     { title: "Calories Tracker", value: "5490 cal", color: "bg-blue-100" },
//     { title: "Carbo Tracker", value: "5290 car", color: "bg-green-100" },
//     { title: "Heart Tracker", value: "490 bpm", color: "bg-pink-100" },
//     { title: "Water Tracker", value: "1490 oz", color: "bg-yellow-100" },
//   ];

//   const mealsToday = [
//     { mealType: "Breakfast", mealDetails: "Oatmeal & Banana", isVeg: true },
//     { mealType: "Lunch", mealDetails: "Grilled Chicken Salad", isVeg: false },
//     { mealType: "Dinner", mealDetails: "Salmon & Vegetables", isVeg: false },
//   ];

//   const vegMeals = mealsToday.filter(meal => meal.isVeg);
//   const nonVegMeals = mealsToday.filter(meal => !meal.isVeg);

//   const activityLogs = [
//     { time: "8:00 AM", activity: "Morning Run - 3 miles" },
//     { time: "12:00 PM", activity: "Yoga Session - 30 mins" },
//     { time: "6:00 PM", activity: "Strength Training - 1 hour" },
//   ];

//   const user = {
//     name: "Prime",
//     email: "prime@example.com",
//     avatar: "https://via.placeholder.com/150",
//   };

//   const handleSettingsChange = (key, value) => {
//     setSettings((prevSettings) => ({
//       ...prevSettings,
//       [key]: value,
//     }));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header */}
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Welcome back, Prime!</h1>
//         <div className="flex items-center space-x-4">
//           <Button label="Help" />
//           <Button label="Upgrade" />
//         </div>
//       </header>

//       {/* Tracker Cards */}
//       <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//         {trackers.map((card, index) => (
//           <TrackerCard
//             key={index}
//             title={card.title}
//             value={card.value}
//             color={card.color}
//           />
//         ))}
//       </section>

//       {/* Graphs and Reports */}
//       <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Calories Graph */}
//         <div className="p-6 bg-white rounded-md shadow-md">
//           <img
//             src="https://via.placeholder.com/300x150"
//             alt="Graph Placeholder"
//             className="w-full"
//           />
//         </div>

//         {/* Report */}
//         <div className="p-6 bg-white rounded-md shadow-md">
//           <h2 className="text-xl font-bold mb-4">Report on This Week</h2>
//           <img
//             src="https://via.placeholder.com/150x150"
//             alt="Pie Chart Placeholder"
//             className="w-full"
//           />
//         </div>
//       </section>

//       {/* Meal Type Selection */}
//       <div className="flex justify-center space-x-4 my-8">
//         <Button
//           label="Vegetarian"
//           onClick={() => setSelectedMealType("veg")}
//           className={selectedMealType === "veg" ? "bg-green-300" : ""}
//         />
//         <Button
//           label="Non-Vegetarian"
//           onClick={() => setSelectedMealType("non-veg")}
//           className={selectedMealType === "non-veg" ? "bg-red-300" : ""}
//         />
//       </div>

//       {/* Meal Sections */}
//       {selectedMealType === "veg" ? (
//         <MealSection title="Vegetarian Meals Today" meals={vegMeals} />
//       ) : (
//         <MealSection title="Non-Vegetarian Meals Today" meals={nonVegMeals} />
//       )}

//       {/* Activity Logs */}
//       <ActivityLogSection logs={activityLogs} />

//       {/* Profile Section */}
//       <ProfileSection user={user} />

//       {/* Settings Section */}
//       <SettingsSection settings={settings} onChange={handleSettingsChange} />

//       {/* Water Intake Tracker */}
//       <WaterIntakeTracker intake={5} goal={settings.waterGoal} />

//       {/* Sleep Tracker */}
//       <SleepTracker sleepHours={8} />

//       {/* Exercise Tracker */}
//       <ExerciseTracker exerciseType="Running" duration={30} />

//       {/* Footer */}
//       <footer className="mt-8 text-center text-gray-500">
//         <p>&copy; 2025 Fitness Dashboard. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// };





// // Water Intake Tracker Component
// const WaterIntakeTracker = ({ intake, goal }) => {
//   return (
//     <div className="p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">Water Intake</h2>
//       <p className="text-2xl font-bold">{intake} / {goal} ltr</p>
//     </div>
//   );
// };

// // Sleep Tracker Component
// const SleepTracker = ({ sleepHours, sleepQuality }) => {
//   return (
//     <div className="p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">Sleep Tracker</h2>
//       <p className="text-2xl font-bold">{sleepHours} hours</p>
//       <p className="text-lg text-gray-600">Quality: {sleepQuality}</p>
//     </div>
//   );
// };

// // Exercise Tracker Component
// const ExerciseTracker = ({ exerciseType, duration }) => {
//   return (
//     <div className="p-6 bg-white rounded-md shadow-md">
//       <h2 className="text-xl font-bold mb-4">Exercise Tracker</h2>
//       <p className="text-2xl font-bold">{exerciseType}</p>
//       <p className="text-lg text-gray-600">Duration: {duration} mins</p>
//     </div>
//   );
// };
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ExerciseTracker from "./ExerciseTracker";
import MealSection from "./MealSection";
import WaterIntakeTracker from "./WaterIntakeTracker";
import SleepTracker from "./SleepTracker";
import BmiCalculator from "./BmiCalculator";
import ProgressChart from "./ProgressChart";
import { getUserProfile } from "../api";

const mockData = [
  { date: "Day 1", value: 200 },
  { date: "Day 2", value: 400 },
  { date: "Day 3", value: 350 },
  { date: "Day 4", value: 500 },
];

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const { data } = await getUserProfile(token);
        setUser(data);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header title={`Welcome, ${user ? user.name : "User"}!`} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ExerciseTracker />
          <MealSection />
          <WaterIntakeTracker />
          <SleepTracker />
          <BmiCalculator />
          <div className="p-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <ProgressChart data={mockData} title="Weight Progress" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
