// Dashboard.js
import React from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container fluid>
      <h2>Dashboard</h2>
      <Card>
        <Card.Header>Available Courses</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Course 1</ListGroup.Item>
          <ListGroup.Item>Course 2</ListGroup.Item>
          <ListGroup.Item>Course 3</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Dashboard;
