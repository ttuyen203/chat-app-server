const express = require("express");
const registerUser = require("../controller/registerUser");
const checkEmail = require("../controller/checkEmail");
const checkPassword = require("../controller/checkPassword");
const userDetail = require("../controller/userDetail");
const logout = require("../controller/logout");
const updateUserDetail = require("../controller/updateUserDetail");
const searchUser = require("../controller/searchUser");

const router = express.Router();

router.post("/register", registerUser);
router.post("/email", checkEmail);
router.post("/password", checkPassword);
router.get("/user-detail", userDetail);
router.get("/logout", logout);
router.post("/update-user", updateUserDetail);
router.post("/search-user", searchUser);

module.exports = router;
