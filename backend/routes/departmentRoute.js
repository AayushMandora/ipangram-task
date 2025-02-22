const express = require("express");
const router = express.Router();
const {
  addDepartment,
  getAllDepartments,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/departmentController");

router.post("/", addDepartment);

router.get("/", getAllDepartments);

router.put("/:id", updateDepartment);

router.delete("/:id", deleteDepartment);

module.exports = router;
