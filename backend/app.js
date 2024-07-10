const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
const teacherRoutes = require("./routes/teacherRoutes");
const savingRoutes = require("./routes/savingRoutes");
const rememberRoutes = require("./routes/rememberRoutes");
const markRoutes = require("./routes/markRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/savings", savingRoutes);
app.use("/remembers", rememberRoutes);
app.use("/marks", markRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
