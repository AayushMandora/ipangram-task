const User = require("../models/user");

const getEmployeeInIt = async (req, res) => {
  const employees = await User.find({
    role: "employee",
    _id: {
      $in: (
        await Department.find({ categoryName: "IT", location: /^A/i })
      ).flatMap((d) => d.employees),
    },
  });

  res.json(employees);
};

const getEmployeeInSales = async (req, res) => {
  const employees = await User.find({
    role: "employee",
    _id: {
      $in: (
        await Department.find({ categoryName: "Sales" })
      ).flatMap((d) => d.employees),
    },
  }).sort({ firstName: -1 });

  res.json(employees);
};

module.exports = {
  getEmployeeInIt,
  getEmployeeInSales,
};
