const db = require("../models");

exports.getAllTeachers = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Teacher");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Teacher WHERE id = ?", [
      req.params.id,
    ]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTeacher = async (req, res) => {
  const { name, address, phone, age, email, working_date } = req.body;
  try {
    const results = await db.query(
      "INSERT INTO Teacher (name, address, phone, age, email, working_date) VALUES (?, ?, ?, ?, ?, ?)",
      [name, address, phone, age, email, working_date]
    );
    res.json({ id: results.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTeacher = async (req, res) => {
  const { name, address, phone, age, email, working_date } = req.body;
  try {
    await db.query(
      "UPDATE Teacher SET name = ?, address = ?, phone = ?, age = ?, email = ?, working_date = ? WHERE id = ?",
      [name, address, phone, age, email, working_date, req.params.id]
    );
    res.json({ message: "Teacher updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    await db.query("DELETE FROM Teacher WHERE id = ?", [req.params.id]);
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
