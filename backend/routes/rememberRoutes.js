const express = require("express");
const router = express.Router();
const rememberController = require("../controllers/rememberController");

router.get("/", rememberController.getAllRemembers);
router.get("/:id", rememberController.getRememberById);
router.post("/", rememberController.createRemember);
router.put("/:id", rememberController.updateRemember);
router.delete("/:id", rememberController.deleteRemember);

module.exports = router;
