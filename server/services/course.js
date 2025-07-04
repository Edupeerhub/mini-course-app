const Course = require("../models/course");

exports.createCourse = async (courseData) => {
  const course = await Course.create(courseData);
  return course;
};

exports.getAllCourses = async () => {
  return await Course.find({});
};

exports.getOneCourse = async (courseId) => {
  return await Course.findById(courseId);
};

exports.updateCourse = async (courseId, updateData) => {
  return await Course.findByIdAndUpdate(courseId, updateData, { new: true });
};

exports.deleteCourse = async (courseId) => {
  return await Course.findByIdAndDelete(courseId);
};
