import { useParams, useNavigate } from 'react-router-dom';

const courseData = [
  {
    id: 1,
    title: 'React for Beginners',
    description: 'A beginner-friendly React course with real-world examples.',
    youtubeUrl: 'https://www.youtube.com/embed/bMknfKXIFA8',
  },
  {
    id: 2,
    title: 'Tailwind CSS Crash Course',
    description: 'Learn how to rapidly style websites using Tailwind CSS.',
    youtubeUrl: 'https://www.youtube.com/embed/UBOj6rqRUME',
  },
  {
    id: 3,
    title: 'JavaScript Essentials',
    description: 'Master the basics of JavaScript to start building dynamic websites.',
    youtubeUrl: 'https://www.youtube.com/embed/W6NZfCO5SIk',
  },
];

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courseData.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="p-6 text-center text-red-600">
        <h2 className="text-xl font-semibold">Course Not Found</h2>
        <button
          onClick={() => navigate('/courses')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{course.title}</h1>
      <p className="text-gray-700 mb-6">{course.description}</p>

      <div className="aspect-video mb-6">
        <iframe
          className="w-full h-full rounded"
          src={course.youtubeUrl}
          title={course.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <button
        onClick={() => navigate('/courses')}
        className="bg-gray-200 text-blue-700 px-4 py-2 rounded hover:bg-gray-300"
      >
        ← Back to Courses
      </button>
    </div>
  );
}