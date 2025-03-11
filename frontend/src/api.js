import axios from "axios";

const API_URL = "http://localhost:5000/api";

// User Authentication
export const loginUser = async (credentials) => axios.post(`${API_URL}/users/login`, credentials);
export const registerUser = async (data) => axios.post(`${API_URL}/users/register`, data);
export const getUserProfile = async (token) =>
  axios.get(`${API_URL}/users/profile`, { headers: { Authorization: `Bearer ${token}` } });

// Workout API
export const addWorkout = async (data, token) =>
  axios.post(`${API_URL}/workouts`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getWorkouts = async (token) =>
  axios.get(`${API_URL}/workouts`, { headers: { Authorization: `Bearer ${token}` } });

// Meal API
export const addMeal = async (data, token) =>
  axios.post(`${API_URL}/meals`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getMeals = async (token) =>
  axios.get(`${API_URL}/meals`, { headers: { Authorization: `Bearer ${token}` } });

// Water Intake API
export const addWaterIntake = async (data, token) =>
  axios.post(`${API_URL}/water`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getWaterIntake = async (token) =>
  axios.get(`${API_URL}/water`, { headers: { Authorization: `Bearer ${token}` } });

// Sleep Tracker API
export const addSleep = async (data, token) =>
  axios.post(`${API_URL}/sleep`, data, { headers: { Authorization: `Bearer ${token}` } });
export const getSleep = async (token) =>
  axios.get(`${API_URL}/sleep`, { headers: { Authorization: `Bearer ${token}` } });
