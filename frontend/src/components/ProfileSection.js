import React, { useState, useEffect } from "react";

const ProfileSection = () => {
  const [profile, setProfile] = useState({ name: "", age: "", weight: "", height: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch("/api/profile"); // Replace with actual API endpoint
      const data = await response.json();
      setProfile(data);
    };

    fetchProfile();
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Age:</strong> {profile.age}</p>
      <p><strong>Weight:</strong> {profile.weight} kg</p>
      <p><strong>Height:</strong> {profile.height} cm</p>
    </div>
  );
};

export default ProfileSection;
