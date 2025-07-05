import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to CourseHub!</h1>
      <p className="text-lg mb-6 max-w-xl text-center">
        Learn modern web development through curated video courses. From beginner to advanced topics —
        build your skills at your own pace.
      </p>
     
      <div className="flex gap-4">
        <Link
          to="/courses"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Browse Courses
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-gray-200 text-blue-700 rounded hover:bg-gray-300 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}