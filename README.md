# Mini Course CRUD App

A simple full-stack CRUD application with user authentication built as a one-week team project to practice modern web development workflows and collaboration.

## Project Overview

This application allows users to register, log in, and manage a collection of courses with full create, read, update, and delete functionality.

### Key Features

- **User Authentication** - JWT-based registration and login system
- **Course Management** - Complete CRUD operations for courses
- **Protected Routes** - Secure access to course management features
- **Responsive Design** - Works on desktop and mobile devices

## Technology Stack

**Frontend:**
- React with Vite
- Fetch for API requests
- React Router for navigation
- CSS for styling

**Backend:**
- Node.js with Express
- JWT for authentication
- RESTful API design
- MongoDB for data storage

**Development Tools:**
- GitHub for version control and collaboration
- GitHub Actions for CI/CD
- ESLint for code quality
- Jest for testing

## API Endpoints

### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login

### Courses
- `GET /courses` - List all courses
- `POST /courses` - Create a new course
- `PUT /courses/:id` - Update a course
- `DELETE /courses/:id` - Delete a course

## Project Structure

```
mini-course-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api/           # API service functions
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Route-level components
│   │   ├── utils/         # Helper functions
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env
├── server/                 # Express backend
│   ├── controllers/       # Route handlers
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── models/           # Data models
│   ├── tests/            # Test files
│   ├── config/           # Configuration files
│   ├── index.js
│   ├── package.json
│   └── .env
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd mini-course-app
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   ```bash
   # Copy example files and fill in your values
   cp server/.env.example server/.env
   cp client/.env.example client/.env
   ```

5. Start the development servers:
   ```bash
   # Terminal 1 - Backend
   cd server
   npm run dev

   # Terminal 2 - Frontend
   cd client
   npm run dev
   ```

## Development Workflow

This project follows a collaborative development workflow:

1. **Branch Creation** - Create feature branches from main
2. **Pull Requests** - Submit changes via PR for review
3. **Code Review** - At least one team member reviews each PR
4. **Testing** - All tests must pass before merging
5. **CI/CD** - Automated testing and linting on each PR

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) for detailed guidelines.

## Learning Objectives

Through this project, team members will gain experience with:

- **Collaboration** - GitHub workflow, code reviews, project management
- **Frontend Development** - React components, state management, API integration
- **Backend Development** - Express routing, middleware, authentication
- **Full-Stack Integration** - Connecting frontend and backend systems
- **Testing** - Writing and running unit tests
- **DevOps** - CI/CD pipelines and deployment strategies

## Testing

Run tests for both frontend and backend:

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our development process and how to submit pull requests.

## Team

-  - Frontend Lead
-  - Backend Lead
-  - Cloud Lead
-  - Cybersecurity Lead

## License

This project is created for educational purposes as part of a coding bootcamp/course.
