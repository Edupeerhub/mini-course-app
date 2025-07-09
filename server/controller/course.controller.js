const courseService = require("../services/course");

async function createCourse(req, res) {
  try {
    const { title, courseCode, description } = req.body;

    const createdCourse = await courseService.createCourse({
      title,
      courseCode,
      description,
      userId: req.user._id,
    });

    res.status(201).send({
      message: "Course created successfully",
      course: createdCourse,
    });
  } catch (error) {
    console.error(`Encountered error: ${error}`);
    res.status(500).send("Something went wrong");
  }
}

async function getOneCourse(req, res) {
  try {
    const courseId = req.params.id;
    const course = await courseService.getOneCourse({
      courseId,
      userId: req.user._id,
    });
    if (!course) {
      res.status(404).send({
        message: "Course not found",
      });
      return;
    }
    res.status(200).send({
      message: "Course found",
      course: course,
    });
  } catch (error) {
    console.error(`Encountered error: ${error}`);
    res.status(500).send("Something went wrong");
  }
}

async function getAllCourses(req, res) {
  try {
    const userId = req.user._id;
    const courses = await courseService.getAllCourses(userId);
    res.status(200).send({
      message: "Courses retrieved successfully",
      course: courses,
    });
  } catch (error) {
    console.error(`Encountered error: ${error}`);
    res.status(500).send("Something went wrong");
  }
}

async function updateCourse(req, res) {
  try {
    const courseId = req.params.id;
    const updatedCourse = await courseService.updateCourse({
      courseId: courseId,
      updateData: req.body,
      userId: req.user._id,
    });
    if (!updatedCourse) {
      res.status(404).send({
        message: "Course not found",
      });
      return;
    }
    res.status(200).send({
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    console.error(`Encountered error: ${error}`);
    res.status(500).send("Something went wrong");
  }
}

async function deleteCourse(req, res) {
  try {
    const courseId = req.params.id;
    const deleteCount = await courseService.deleteCourse({
      courseId,
      userId: req.user._id,
    });
    if (!deleteCount) {
      res.status(404).send({
        message: "Course not found",
      });
      return;
    }
    res.status(200).send({
      message: "Course deleted successfully",
    });
  } catch (error) {
    console.error(`Encountered error: ${error}`);
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
