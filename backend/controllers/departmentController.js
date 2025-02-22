const Department = require("../models/department");

const addDepartment = async (req, res) => {
  const data = { ...req.body };
  try {
    const newDepartment = new Department(data);
    const result = await newDepartment.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find({}).populate("employees");
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const department = await Department.findByIdAndDelete(req.params.id);
    if (!department)
      return res.status(404).json({ message: "Department not found" });
    res.json({ message: "Department deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const id = req.params.id;
    const data = { ...req.body };
    const department = await Department.findByIdAndUpdate(_id, data, {
      new: true,
    });
    if (!department)
      return res.status(404).json({ message: "Department not found" });
    res.json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addDepartment,
  getAllDepartments,
  deleteDepartment,
  updateDepartment,
};
