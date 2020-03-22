const express = require("express");
const router = express.Router();

const userRoute = require('./users/index');
const learningUnitRoute = require('./learningunits/index');

router.use("/users/", userRoute);
router.use("/learningunits/", learningUnitRoute);

module.exports = router;