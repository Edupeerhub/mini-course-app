import { Link } from 'react-router-dom';

const courseData = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'Learn React step-by-step with projects.',
  },
  {
    id: 2,
    title: 'Tailwind CSS Crash Course',
    description: 'Master Tailwind to style apps quickly.',
  },
  
];

export default function Courses() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Available Courses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {courseData.map((course) => (
          <div key={course.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>

        
            <Link
              to={`/courses/${course.id}`}
              className="text-blue-600 hover:underline font-medium"
            >
              View Course
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}