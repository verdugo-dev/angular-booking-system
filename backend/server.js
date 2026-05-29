const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const DB_FILE = path.join(__dirname, 'db.json');

function loadData() {
  const dataBuffer = fs.readFileSync(DB_FILE);
  return JSON.parse(dataBuffer.toString());
}

function saveData(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// COURSES ROUTES

app.get('/courses', (req, res) => {
  const data = loadData();
  res.json(data.courses);
})

app.get('/courses/:id', (req, res) => {
  const data = loadData();
  const courseId = parseInt(req.params.id, 10);
  const course = data.courses.find(c => c.id === courseId)

  if (course) {
    res.json(course);
  } else {
    res.status(404).json({error: 'Course not found'});
  }
});

app.post('/courses', (req, res) => {
  const data = loadData();
  const newCourse = req.body;

  newCourse.id = Date.now();
  data.courses.push(newCourse);

  saveData(data);

  res.status(201).json(newCourse);
});

// STUDENT ROUTES

// Get all students
app.get('/students', (req, res) => {
  const data = loadData();
  res.json(data.students);
});

// Add a new student
app.post('/students', (req, res) => {
  const data = loadData();
  const newStudent = req.body;

  newStudent.id = Date.now();
  newStudent.enrolledCourses = [];
  data.students.push(newStudent);
  saveData(data);

  res.status(201).json(newStudent);
});

add.post('/students/:studentId/courses', (req, res) => {
  const data = loadData();
  const studentId = parseInt(req.params.studentId, 10);
  const student = data.students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({error: 'Student not found'});
  }

  const {courseId} = req.body;
  const courseExists = data.courses.some(c => c.id === courseId);

  if (!courseExists) {
    return res.status(404).json({error: 'Course not found'});
  }

  if (!student.enrolledCourses.includes(courseId)) {
    student.enrolledCourses.push(courseId);
    saveData(data);
  }

  res.status(200).json(student);
});

app.get('/courses/:id/students', (req, res) => {
  const data = loadData();
  const courseId = parseInt(req.params.id, 10);

  const enrolledStudents = data.students.filter((student) =>
    student.enrolledCourses && student.enrolledCourses.includes(courseId)
  );

  res.json(enrolledStudents);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server on running on port ${PORT}`)
})
