const express = require("express");
const router = express.Router();
const savingController = require("../controllers/savingController");

router.get("/", savingController.getAllSavings);
router.get("/:id", savingController.getSavingById);
router.post("/", savingController.createSaving);
router.put("/:id", savingController.updateSaving);
router.delete("/:id", savingController.deleteSaving);

module.exports = router;
