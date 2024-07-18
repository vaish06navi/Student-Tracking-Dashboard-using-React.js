// EducationStreams.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const EducationStreams = () => {
  // Example education streams data
  const streams = [
    'Engineering',
    'Medicine',
    'Law',
    'Arts',
    'Science',
    'Commerce'
  ];

  return (
    <Card>
      <Card.Header>Education Streams</Card.Header>
      <ListGroup variant="flush">
        {streams.map((stream, index) => (
          <ListGroup.Item key={index}>{stream}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default EducationStreams;
