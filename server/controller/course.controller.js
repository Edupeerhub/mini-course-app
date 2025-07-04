
async function createCourse(req, res) {
  try {
    res.status(201).send("Course created");
  } catch (error) {
    console.error(`Encountered error: ${error}`)
    res.status(500).send("Something went wrong");
  }
}

async function getOneCourse(req, res) {
  try {
    res.status(200).send("Course found");
  } catch (error) {
    console.error(`Encountered error: ${error}`)
    res.status(500).send("Something went wrong");
  }
}

async function getAllCourses(req, res) {
  try {
    res.status(200).send("All Courses found");
  } catch (error) {
    console.error(`Encountered error: ${error}`)
    res.status(500).send("Something went wrong");
  }
}

async function updateCourse(req, res) {
  res.status(200).send("Course updated");
}

async function deleteCourse(req, res) {
  try {
    res.status(200).send("Course deleted");
  } catch (error) {
    console.error(`Encountered error: ${error}`)
    res.status(500).send("Something went wrong");
  }
}

module.exports = {
  createCourse,
  getOneCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
};
