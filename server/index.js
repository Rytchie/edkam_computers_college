const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello from the student portal backend!');
});

const students = [
  { studentId: 'student1', password: 'password1', name: 'Alice Smith' },
  { studentId: 'student2', password: 'password2', name: 'Bob Johnson' },
  { studentId: 'student', password: 'password', name: 'Test Student' },
];

app.post('/api/login', (req, res) => {
  const { studentId, password } = req.body;

  if (!studentId || !password) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  const student = students.find(s => s.studentId === studentId && s.password === password);

  if (student) {
    res.status(200).json({ success: true, student: { studentId: student.studentId, name: student.name } });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

const announcements = [
  { id: 'a1', title: 'Mid-term Exam Schedule Update', date: '2024-10-25', contentSnippet: 'Please note the updated schedule for mid-term exams...', priority: 'high', isRead: false, course: 'All Courses' },
  { id: 'a2', title: 'Guest Lecture: AI in Web Development', date: '2024-10-22', contentSnippet: 'Join us for an exciting guest lecture next Friday.', priority: 'medium', isRead: true, course: 'Full-Stack Web Development' },
  { id: 'a3', title: 'Library System Maintenance', date: '2024-10-20', contentSnippet: 'The online library portal will be down for maintenance this weekend.', priority: 'low', isRead: true },
  { id: 'a4', title: 'New Resources for Data Science', date: '2024-10-18', contentSnippet: 'Check out the new datasets and articles added to the Data Science course materials.', priority: 'medium', isRead: false, course: 'Data Science & ML'},
];

app.get('/api/announcements', (req, res) => {
  res.status(200).json(announcements);
});

const courses = [
  { id: 'webdev', name: 'Full-Stack Web Development', instructor: 'Dr. Ada Lovelace', modules: ['Introduction to HTML & CSS', 'JavaScript Fundamentals', 'React Basics', 'Node.js & Express', 'MongoDB Essentials'] },
  { id: 'datasci', name: 'Data Science & Machine Learning', instructor: 'Prof. Alan Turing', modules: ['Python for Data Science', 'Statistics Core Concepts', 'Machine Learning Algorithms', 'Data Visualization with Matplotlib'] },
];

app.get('/api/courses', (req, res) => {
  res.status(200).json(courses);
});

const deadlines = [
  { id: 'd1', title: 'Web Dev - Assignment 1: Portfolio Page', date: '2024-11-15', courseId: 'webdev', courseName: 'Full-Stack Web Development' },
  { id: 'd2', title: 'Data Sci - Quiz 2: Probability', date: '2024-11-20', courseId: 'datasci', courseName: 'Data Science & ML' },
  { id: 'd3', title: 'Web Dev - Project Proposal', date: '2024-12-01', courseId: 'webdev', courseName: 'Full-Stack Web Development' },
];

app.get('/api/deadlines', (req, res) => {
  res.status(200).json(deadlines);
});

const grades = [
  { id: 'g1', studentId: 'student1', courseId: 'webdev', courseName: 'Full-Stack Web Development', assignment: 'HTML Basics', score: 85, maxScore: 100, feedback: 'Good effort, minor CSS fixes needed.' },
  { id: 'g2', studentId: 'student1', courseId: 'webdev', courseName: 'Full-Stack Web Development', assignment: 'JavaScript Quiz 1', score: 92, maxScore: 100, feedback: 'Excellent!' },
  { id: 'g3', studentId: 'student1', courseId: 'datasci', courseName: 'Data Science & ML', assignment: 'Python Functions Task', score: 78, maxScore: 100, feedback: 'Review loops for efficiency.' },
  { id: 'g4', studentId: 'student2', courseId: 'webdev', courseName: 'Full-Stack Web Development', assignment: 'HTML Basics', score: 90, maxScore: 100, feedback: 'Well done.' },
];

app.get('/api/grades', (req, res) => {
  const { studentId } = req.query;
  if (studentId) {
    const studentGrades = grades.filter(grade => grade.studentId === studentId);
    res.status(200).json(studentGrades);
  } else {
    // No studentId provided, return all grades or an empty array/specific message
    // For now, let's return all grades if no studentId is specified,
    // or an empty array if that's preferred.
    // Based on the prompt, "If no studentId is provided... return an appropriate response (e.g., empty array or 404)"
    // Returning an empty array seems more appropriate than 404 if the endpoint itself is valid.
    res.status(200).json([]);
  }
});

let profiles = {
  'student1': { name: 'Alice Smith', email: 'alice@example.com', phone: '+254 700 123456', address: 'P.O. Box 123, Nakuru', avatarUrl: 'https://picsum.photos/seed/student1_avatar/200/200' },
  'student2': { name: 'Bob Johnson', email: 'bob@example.com', phone: '+254 701 654321', address: 'P.O. Box 456, Nairobi', avatarUrl: 'https://picsum.photos/seed/student2_avatar/200/200' },
  'student': { name: 'Test Student', email: 'test@example.com', phone: '+254 702 112233', address: 'P.O. Box 789, Kisumu', avatarUrl: 'https://picsum.photos/seed/student_avatar/200/200' },
};

// GET profile by studentId
app.get('/api/profile/:studentId', (req, res) => {
  const { studentId } = req.params;
  const profile = profiles[studentId];

  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404).json({ message: "Profile not found" });
  }
});

// PUT (update) profile by studentId
app.put('/api/profile/:studentId', (req, res) => {
  const { studentId } = req.params;
  if (profiles[studentId]) {
    // Update only the fields that are provided in the request body
    const updatedProfile = { ...profiles[studentId], ...req.body };
    profiles[studentId] = updatedProfile;
    res.status(200).json(updatedProfile);
  } else {
    res.status(404).json({ message: "Profile not found" });
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
