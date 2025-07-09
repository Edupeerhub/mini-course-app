const Course = require("../models/course");

exports.createCourse = async (courseData) => {
  const course = await Course.create(courseData);
  return course;
};

exports.getAllCourses = async (userId) => {
  return await Course.find({ userId });
};

exports.getOneCourse = async ({ courseId, userId }) => {
  console.log("userId: ", userId);
  return await Course.findOne({ _id: courseId, userId: userId });
};

exports.updateCourse = async ({ courseId, updateData, userId }) => {
  return await Course.findOneAndUpdate({ _id: courseId, userId }, updateData, {
    new: true,
    runValidators: true,
  });
};

exports.deleteCourse = async ({ courseId, userId }) => {
  return await Course.findOneAndDelete({ _id: courseId, userId });
};
