// Attendance.js
import React, { useState } from 'react';
import { Card, Button, Table } from 'react-bootstrap';

const Attendance = () => {
  // Example attendance data
  const [attendance, setAttendance] = useState([
    { date: '2023-06-01', status: 'Present' },
    { date: '2023-06-02', status: 'Absent' },
    { date: '2023-06-03', status: 'Present' },
  ]);

  const markAttendance = (status) => {
    const newRecord = { date: new Date().toISOString().split('T')[0], status };
    setAttendance([...attendance, newRecord]);
  };

  return (
    <Card>
      <Card.Header>Attendance</Card.Header>
      <Card.Body>
        <Button variant="success" onClick={() => markAttendance('Present')}>Mark Present</Button>
        <Button variant="danger" onClick={() => markAttendance('Absent')} className="ml-2">Mark Absent</Button>
      </Card.Body>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((record, index) => (
            <tr key={index}>
              <td>{record.date}</td>
              <td>{record.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default Attendance;
