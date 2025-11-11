"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import * as db from "../Database";

import {
  addNewCourse,
  deleteCourse,
  updateCourse,
  Course,
} from "../Courses/reducer";
import { enroll, unenroll } from "../Enrollments/reducer"; // ✅ Added
import { RootState } from "../store";

// ✅ Fixed: match reducer type (no _id)
interface Enrollment {
  user: string;
  course: string;
}

export default function Dashboard() {
  // ✅ Redux state
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const { enrollments } = useSelector(
    (state: RootState) => state.enrollmentReducer
  );
  const dispatch = useDispatch();

  // ✅ Local form state
  const [course, setCourse] = useState<Course>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
    createdBy: currentUser?._id ?? "", // ✅ track creator
  });

  // ✅ Enrollment toggle
  const [showAllCourses, setShowAllCourses] = useState(false);

  // ✅ Helper function
  const isEnrolled = (courseId: string) =>
    enrollments.some(
      (e: Enrollment) => e.user === currentUser?._id && e.course === courseId
    );

  // ✅ If no one is signed in
  if (!currentUser) {
    return (
      <div className="p-4" id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h2 id="wd-dashboard-published">Published Courses (0)</h2>
        <hr />
      </div>
    );
  }

  // ✅ Filter: show courses user created OR enrolled in
  const visibleCourses: Course[] = showAllCourses
    ? courses
    : courses.filter(
        (c: Course) => c.createdBy === currentUser._id || isEnrolled(c._id)
      );

  return (
    <div className="p-4" id="wd-dashboard">
      {/* ✅ Header with toggle */}
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <Button
          variant="primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          {showAllCourses ? "Show Enrolled Only" : "Show All Courses"}
        </Button>
      </div>

      <hr />

      {/* --- New / Edit Course Form --- */}
      <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() =>
            dispatch(
              addNewCourse({
                ...course,
                createdBy: currentUser._id, // ✅ ensure creator stored
              })
            )
          }
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          id="wd-update-course-click"
          onClick={() => dispatch(updateCourse(course))}
        >
          Update
        </button>
      </h5>

      <br />
      <FormControl
        value={course.name}
        className="mb-2"
        placeholder="Course Name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <FormControl
        as="textarea"
        rows={3}
        value={course.description}
        className="mb-3"
        placeholder="Course Description"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
      />
      <hr />

      {/* --- Visible Courses --- */}
      <h2 id="wd-dashboard-published">
        Your Courses ({visibleCourses.length})
      </h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {visibleCourses.map((c: Course) => (
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={c.image ?? "/images/placeholder.jpg"}
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </Card.Text>

                    <div className="d-flex justify-content-between align-items-center">
                      <Button variant="outline-primary" size="sm">
                        Go
                      </Button>

                      {/* ✅ Enroll / Unenroll buttons */}
                      {isEnrolled(c._id) ? (
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              unenroll({
                                user: currentUser._id,
                                course: c._id,
                              })
                            );
                          }}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(
                              enroll({
                                user: currentUser._id,
                                course: c._id,
                              })
                            );
                          }}
                        >
                          Enroll
                        </Button>
                      )}
                    </div>

                    {/* Existing Edit/Delete buttons below */}
                    <div className="mt-2 d-flex justify-content-end">
                      <Button
                        id="wd-edit-course-click"
                        variant="warning"
                        className="me-2"
                        size="sm"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(c);
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        id="wd-delete-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(deleteCourse(c._id));
                        }}
                      >
                        Delete
                      </Button>
                    </div>
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
