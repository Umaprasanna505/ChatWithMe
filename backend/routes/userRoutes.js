const express = require("express");
const router = express.Router();

const {
  registerUser,
  authUser,
  allUsers
} = require("../controllers/userControllers");

// register
router.post("/", registerUser);

// login
router.post("/login", authUser);

// search users
router.get("/", allUsers);

module.exports = router;