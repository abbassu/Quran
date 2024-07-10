const db = require("../models");

exports.getAllMarks = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Mark");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMarkById = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Mark WHERE id = ?", [
      req.params.id,
    ]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createMark = async (req, res) => {
  const {
    student_id,
    teacher_id,
    date,
    save_mark,
    remember_mark,
    save_id,
    remember_id,
  } = req.body;
  try {
    const results = await db.query(
      "INSERT INTO Mark (student_id, teacher_id, date, save_mark, remember_mark, save_id, remember_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        student_id,
        teacher_id,
        date,
        save_mark,
        remember_mark,
        save_id,
        remember_id,
      ]
    );
    res.json({ id: results.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMark = async (req, res) => {
  const {
    student_id,
    teacher_id,
    date,
    save_mark,
    remember_mark,
    save_id,
    remember_id,
  } = req.body;
  try {
    await db.query(
      "UPDATE Mark SET student_id = ?, teacher_id = ?, date = ?, save_mark = ?, remember_mark = ?, save_id = ?, remember_id = ? WHERE id = ?",
      [
        student_id,
        teacher_id,
        date,
        save_mark,
        remember_mark,
        save_id,
        remember_id,
        req.params.id,
      ]
    );
    res.json({ message: "Mark updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteMark = async (req, res) => {
  try {
    await db.query("DELETE FROM Mark WHERE id = ?", [req.params.id]);
    res.json({ message: "Mark deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
