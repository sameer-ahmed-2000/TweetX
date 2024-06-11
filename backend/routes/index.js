const express = require("express");
const userRouter=require("./user");
const feedRouter=require("./feed");
const router=express.Router();

router.use("/user",userRouter);
router.use("/feed",feedRouter)
module.exports = router;