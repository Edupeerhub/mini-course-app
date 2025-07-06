import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    // Replace this with real auth logic later
    alert(`Logged in as ${email}`);

    // Reset fields (optional)
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-full ">
      {/* Left Panel */}
      <div className="w-[600px] flex flex-col justify-center items-center p-1">
        <img
          className="w-full max-h-[60vh] object-contain mb-4"
          src="/books.png"
          alt="Books"
        />
        <h1 className="text-2xl font-bold text-center">
          Connecting Bright Minds to Brighter Futures
        </h1>
      </div>

      {/* Right Panel */}
      <div className="flex w-[600px]  p-2 ">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col justify-evenly "
        >
          <h2 className="text-2xl font-bold mb-2 text-center">Login</h2>

          <label className="block mb-1 text-sm font-medium">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your email"
          />

          <label className="block mb-2 text-sm font-medium">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
