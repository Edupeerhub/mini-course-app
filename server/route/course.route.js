const router = require("express").Router();
const courseController = require("../controller/course.controller");
const {courseValidation} = require("../middleware/course.middleware");



router.get("/", courseController.getAllCourses);
router.get("/:id", courseController.getOneCourse);
router.post("/", courseValidation, courseController.createCourse);
router.put("/:id", courseValidation, courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;