// controllers/studentController.js
const db = require("../models");

exports.getAllStudents = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Student");
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM Student WHERE id = ?", [
      req.params.id,
    ]);
    res.json(results[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createStudent = async (req, res) => {
  const {
    firstname,
    secondname,
    lastname,
    address,
    phone,
    parentphone,
    age,
    schoolname,
  } = req.body;
  try {
    const results = await db.query(
      "INSERT INTO Student (firstname, secondname, lastname, address, phone, parentphone, age, schoolname) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        firstname,
        secondname,
        lastname,
        address,
        phone,
        parentphone,
        age,
        schoolname,
      ]
    );
    res.json({ id: results.insertId, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateStudent = async (req, res) => {
  const {
    firstname,
    secondname,
    lastname,
    address,
    phone,
    parentphone,
    age,
    schoolname,
  } = req.body;
  try {
    const results = await db.query(
      "UPDATE Student SET firstname = ?, secondname = ?, lastname = ?, address = ?, phone = ?, parentphone = ?, age = ?, schoolname = ? WHERE id = ?",
      [
        firstname,
        secondname,
        lastname,
        address,
        phone,
        parentphone,
        age,
        schoolname,
        req.params.id,
      ]
    );
    res.json({ message: "Student updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await db.query("DELETE FROM Student WHERE id = ?", [req.params.id]);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
