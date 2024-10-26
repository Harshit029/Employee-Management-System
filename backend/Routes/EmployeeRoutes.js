const express = require("express");
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  deleteEmployeeById,
  updateEmployeeById,


} = require("../Controllers/EmployeeController");
const { cloudnaryFileUploader } = require("../Middleware/FIleUploader");
const router = express.Router(); // Create a router instance

router.get("/", getAllEmployees);
router.post(
  "/:id",
  cloudnaryFileUploader.single("profileImage"),
  createEmployee
);
router.post('/',cloudnaryFileUploader.single('profileImage'), createEmployee)
router.put(
  "/:id",
  cloudnaryFileUploader.single("profileImage"),
  updateEmployeeById
);

router.get("/:id", getEmployeeById);
router.delete("/:id", deleteEmployeeById);

module.exports = router;
