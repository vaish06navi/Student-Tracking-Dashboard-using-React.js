// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentProfile from './components/StudentProfile';
import EducationStreams from './components/EducationStreams';
import EducationBlogs from './components/EducationBlogs';
import Attendance from './components/Attendance';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Container fluid>
        <Row>
          <Col md={3} className="sidebar-col">
            <Sidebar />
          </Col>
          <Col md={9} className="content-col">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={StudentProfile} />
              <Route exact path="/education" component={EducationStreams} />
              <Route exact path="/blogs" component={EducationBlogs} />
              <Route exact path="/attendance" component={Attendance} />
              <Redirect from="/" to="/dashboard" />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
};

export default App;
