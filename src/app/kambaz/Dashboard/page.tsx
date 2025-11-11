"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, Course } from "../Courses/reducer";
import { enrollInCourse, unenrollFromCourse } from "../enrollmentReducer";
import { RootState } from "../store";
import Link from "next/link";
import { Row, Col, CardImg, Card, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/react.png",
    description: "New Description",
    department: "New Department",
    credits: 3,
  });

  const isFaculty = currentUser?.role === "FACULTY";

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
    }
  };

  const coursesToDisplay = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id));

  return (
    <div id="wd-dashboard">
    <div className="d-flex justify-content-between align-items-center mb-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      
      <Button
        variant="primary"
        onClick={() => setShowAllCourses(!showAllCourses)}
      >
        {showAllCourses ? "Show My Courses" : "Enrollments"}
      </Button>
      </div>
      <hr />

      {isFaculty && (
        <>
          <h5 className="mb-0">
            New Course
            <button
              className="btn btn-primary float-end ms-2"
              id="wd-add-new-course-click"
              onClick={() => dispatch(addNewCourse(course))}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2 ms-2"
              id="wd-edit-course-click"
              onClick={() => dispatch(updateCourse(course))}
            >
              Update
            </button>
          </h5>
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} ({coursesToDisplay.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {currentUser &&
            coursesToDisplay.map((course) => {
              const enrolled = isEnrolled(course._id);
              return (
                <Col key={course._id} className="wd-dashboard-course-1" style={{ width: 300 }}>
                  <Card>
                    <Link
                      href={`/kambaz/Courses/${course._id}/home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      onClick={(e) => {
                        if (!enrolled && !isFaculty) {
                          e.preventDefault();
                        }
                      }}
                    >
                      <CardImg variant="top" src={course.image} width="100%" height={160} />
                      <CardBody>
                        <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                          {course.name}
                        </CardTitle>

                        <CardText
                          className="wd-dashboard-course-description overflow-hidden"
                          style={{ height: "100px" }}
                        >
                          {course.description}
                        </CardText>

                        {(enrolled || isFaculty) && <Button variant="primary">Go</Button>}

                        {isFaculty && (
                          <>
                            <Button
                              className="btn btn-danger float-end me-2"
                              onClick={(event) => {
                                event.preventDefault();
                                dispatch(deleteCourse(course._id));
                              }}
                            >
                              Delete
                            </Button>

                            <Button
                              className="btn btn-warning me-2 float-end"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                            >
                              Edit
                            </Button>
                          </>
                        )}

                        {!isFaculty && (
                          <>
                            {enrolled ? (
                              <Button
                                variant="danger"
                                className="float-end"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleUnenroll(course._id);
                                }}
                              >
                                Unenroll
                              </Button>
                            ) : (
                              <Button
                                variant="success"
                                className="float-end"
                                onClick={(event) => {
                                  event.preventDefault();
                                  handleEnroll(course._id);
                                }}
                              >
                                Enroll
                              </Button>
                            )}
                          </>
                        )}
                      </CardBody>
                    </Link>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
}