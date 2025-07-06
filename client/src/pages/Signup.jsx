import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just log for now
    console.log("User signed up:", formData);

    // Redirect to login or courses page
    navigate("/login");
  };

  return (
    <div className="flex flex-row items-center min-h-full py-2">
      {/* Left Panel */}
      <div className="w-[600px] h-[60vh] flex items-center justify-center overflow-hidden ">
        <img
          className="w-full h-full rounded shadow scale-90"
          style={{ objectPosition: "50% 22%" }}
          src="/books-ladder.jpg"
          alt=""
        />
      </div>
      {/* Right Panel */}
      <div className="w-[600px] flex items-center justify-center p-2">
        <div className="bg-white rounded shadow p-6 w-full">
          <h2 className="text-2xl font-bold text-center mb-2">
            Create an Account
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-evenly"
          >
            {/* First Name */}
            <label
              htmlFor="first_name"
              className="block font-medium mb-1 text-sm"
            >
              First Name:
            </label>
            <input
              id="first_name"
              name="first_name"
              type="text"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.first_name}
              onChange={handleChange}
              required
            />

            {/* Last Name */}
            <label
              htmlFor="last_name"
              className="block font-medium mb-1 text-sm"
            >
              Last Name:
            </label>
            <input
              id="last_name"
              name="last_name"
              type="text"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.last_name}
              onChange={handleChange}
              required
            />

            {/* Email */}
            <label htmlFor="email" className="block font-medium mb-1 text-sm ">
              Email:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="block font-medium mb-1 text-sm "
            >
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
