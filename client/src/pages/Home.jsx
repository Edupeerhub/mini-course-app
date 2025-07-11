import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";

export default function Home() {
  const { userInfo } = useContext(AuthContext);

  const username = userInfo?.first_name;
  return (
    <div className="flex flex-col justify-center items-center text-center max-w-2xl">
      <h1 className="text-4xl font-bold mb-4">Welcome to CourseHub New Test!</h1>
      <p className="text-lg mb-6 max-w-xl text-center">
        Learn modern web development through curated video courses. From
        beginner to advanced topics — build your skills at your own pace.
      </p>

      <div className="flex gap-4">
        {username && (
          <Link
            to="/courses"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Browse Courses
          </Link>
        )}
        {!username && (
          <Link
            to="/signup"
            className="px-6 py-3 bg-gray-200 text-blue-700 rounded hover:bg-blue-300 transition"
          >
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}
