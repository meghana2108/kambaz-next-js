"use client";

import Link from "next/link";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function Dashboard() {
  const courses = [
    {
      id: "1234",
      title: "CS1234 React JS",
      description: "Full Stack software developer",
      img: "/images/reactjs.jpg",
    },
    {
      id: "2345",
      title: "CS2345 Node JS",
      description: "Backend development",
      img: "/images/nodejs.jpg",
    },
    {
      id: "3456",
      title: "CS3456 Python",
      description: "Data Science fundamentals",
      img: "/images/python.jpg",
    },
    {
      id: "4567",
      title: "CS4567 Java",
      description: "Enterprise application development",
      img: "/images/java.jpg",
    },
    {
      id: "5678",
      title: "CS5678 C++",
      description: "Competitive programming",
      img: "/images/cpp.jpg",
    },
    {
      id: "6789",
      title: "CS6789 Cybersecurity",
      description: "Security essentials",
      img: "/images/cybersecurity.jpg",
    },
    {
      id: "7890",
      title: "CS7890 SQL",
      description: "Database management",
      img: "/images/sql.jpg",
    },
  ];

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col
              key={course.id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course.id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.img}
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
