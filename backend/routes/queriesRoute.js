const express = require("express");
const router = express.Router();

const {
  getEmployeeInIt,
  getEmployeeInSales,
} = require("../controllers/queries");

router.get("/init", getEmployeeInIt);
router.get("/sales", getEmployeeInSales);

module.exports = router;
