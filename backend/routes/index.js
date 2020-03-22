const express = require("express");
const router = express.Router();

const userRoute = require('./users/index');
const learningUnitRoute = require('./learningunits/index');
const trackRoute = require('./tracks/index');
const roomRoute = require('./rooms/index');

router.use("/users/", userRoute);
router.use("/learningunits/", learningUnitRoute);
router.use("/tracks/", trackRoute);
router.use("/rooms/", roomRoute);

module.exports = router;