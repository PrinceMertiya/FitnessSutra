import React from "react";

const ProfileSection = ({ user }) => {
  return (
    <section className="mt-8">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <div className="flex items-center space-x-4">
          <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
