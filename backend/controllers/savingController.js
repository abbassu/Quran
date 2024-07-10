const db = require("../models");

exports.getAllSavings = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Saving");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSavingById = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Saving WHERE id = ?", [
      req.params.id,
    ]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSaving = async (req, res) => {
  const { page, section, sura, verse } = req.body;
  try {
    const results = await db.query(
      "INSERT INTO Saving (page, section, sura, verse) VALUES (?, ?, ?, ?)",
      [page, section, sura, verse]
    );
    res.json({ id: results.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSaving = async (req, res) => {
  const { page, section, sura, verse } = req.body;
  try {
    await db.query(
      "UPDATE Saving SET page = ?, section = ?, sura = ?, verse = ? WHERE id = ?",
      [page, section, sura, verse, req.params.id]
    );
    res.json({ message: "Saving updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSaving = async (req, res) => {
  try {
    await db.query("DELETE FROM Saving WHERE id = ?", [req.params.id]);
    res.json({ message: "Saving deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
