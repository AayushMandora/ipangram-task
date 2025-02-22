const express = require("express");
const authRouter = require("./routes/authRoute");
const departmentRouter = require("./routes/departmentRoute");
const queriesRouter = require("./routes/queriesRoute");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.use("/auth", authRouter);
router.use("/department", departmentRouter);
router.use("/queries", queriesRouter);

module.exports = router;
