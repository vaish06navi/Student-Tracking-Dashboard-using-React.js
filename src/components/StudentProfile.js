// StudentProfile.js
import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const StudentProfile = () => {
  // Example student profile data
  const student = {
    name: 'Aarav Sharma',
    age: 20,
    email: 'aarav.sharma@example.com',
    stream: 'Engineering',
    year: '3rd Year',
    courses: ['Mathematics', 'Physics', 'Computer Science']
  };

  return (
    <Card>
      <Card.Header>Student Profile</Card.Header>
      <ListGroup variant="flush">
        <ListGroupItem><strong>Name:</strong> {student.name}</ListGroupItem>
        <ListGroupItem><strong>Age:</strong> {student.age}</ListGroupItem>
        <ListGroupItem><strong>Email:</strong> {student.email}</ListGroupItem>
        <ListGroupItem><strong>Stream:</strong> {student.stream}</ListGroupItem>
        <ListGroupItem><strong>Year:</strong> {student.year}</ListGroupItem>
        <ListGroupItem>
          <strong>Courses:</strong>
          <ul>
            {student.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default StudentProfile;
