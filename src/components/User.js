import { useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);

  return (
    <div className="user-card bg-blue-200 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-2">Count: {count}</h1>
      <h2 className="text-xl font-semibold mb-2">Name: {name}</h2>
      <h3 className="text-lg mb-2">Location: {location}</h3>
      <h4 className="text-gray-600">Contact: anshulwadhwa439@gmail.com</h4>
    </div>
  );
};

export default User;
