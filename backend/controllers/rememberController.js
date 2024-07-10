const db = require("../models");

exports.getAllRemembers = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Remember");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRememberById = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Remember WHERE id = ?", [
      req.params.id,
    ]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createRemember = async (req, res) => {
  const { pages, section, sura } = req.body;
  try {
    const results = await db.query(
      "INSERT INTO Remember (pages, section, sura) VALUES (?, ?, ?)",
      [pages, section, sura]
    );
    res.json({ id: results.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateRemember = async (req, res) => {
  const { pages, section, sura } = req.body;
  try {
    await db.query(
      "UPDATE Remember SET pages = ?, section = ?, sura = ? WHERE id = ?",
      [pages, section, sura, req.params.id]
    );
    res.json({ message: "Remember updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteRemember = async (req, res) => {
  try {
    await db.query("DELETE FROM Remember WHERE id = ?", [req.params.id]);
    res.json({ message: "Remember deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
