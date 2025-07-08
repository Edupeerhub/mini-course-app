import { useContext, useState } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [redirect, setRedirect] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, userInfo, isLoading } = useContext(AuthContext);

  const location = useLocation();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const result = await login(email, password);

    if (result.success === true) {
      setRedirect(true);
    } else {
      setError(result.message || "Wrong credentials");
    }

    setLoading(false);
  }
  if (redirect) {
    const from = location.state?.from?.pathname || "/";
    return <Navigate to={from} replace />;
  }

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

          {error && (
            <div
              className="error"
              style={{ color: "red", marginBottom: "10px" }}
            >
              {error}
            </div>
          )}

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
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
