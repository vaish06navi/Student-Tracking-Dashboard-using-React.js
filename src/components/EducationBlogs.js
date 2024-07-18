// EducationBlogs.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const EducationBlogs = () => {
  // Example blogs data
  const blogs = [
    { title: 'Importance of Engineering', link: '#' },
    { title: 'Future of Medicine', link: '#' },
    { title: 'Law and Society', link: '#' },
    { title: 'Arts and Culture', link: '#' },
    { title: 'Science in Everyday Life', link: '#' },
    { title: 'Commerce and Economy', link: '#' }
  ];

  return (
    <Card>
      <Card.Header>Education Blogs</Card.Header>
      <ListGroup variant="flush">
        {blogs.map((blog, index) => (
          <ListGroup.Item key={index}>
            <a href={blog.link}>{blog.title}</a>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default EducationBlogs;
