"use client";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourses, Course } from "../Courses/reducer";
import { enrollInCourse, unenrollFromCourse } from "../enrollmentReducer";
import { RootState } from "../store";
import * as client from "../Courses/client";
import Link from "next/link";
import { Row, Col, CardImg, Card, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";

interface Enrollment {
  user: string;
  course: string;
}

export default function Dashboard() {
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { enrollments } = useSelector((state: RootState) => state.enrollmentReducer) as { enrollments: Enrollment[] };
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

  const fetchCourses = useCallback(async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses, currentUser]);

  const onAddNewCourse = async () => {
    try {
      const newCourse = await client.createCourse(course);
      dispatch(setCourses([...courses, newCourse]));
      setCourse({
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
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      alert(err.response?.data?.message || "Failed to create course");
    }
  };

  const onDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      alert(err.response?.data?.message || "Failed to delete course");
    }
  };

  const onUpdateCourse = async () => {
    try {
      await client.updateCourse(course);
      dispatch(setCourses(courses.map((c) => (c._id === course._id ? course : c))));
    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      alert(err.response?.data?.message || "Failed to update course");
    }
  };

  const isFaculty = currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN";

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment) => enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const handleEnroll = async (courseId: string) => {
    if (currentUser) {
      try {
        await client.enrollInCourse(courseId);
        dispatch(enrollInCourse({ userId: currentUser._id, courseId }));
      } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } } };
        alert(err.response?.data?.message || "Failed to enroll");
      }
    }
  };

  const handleUnenroll = async (courseId: string) => {
    if (currentUser) {
      try {
        await client.unenrollFromCourse(courseId);
        dispatch(unenrollFromCourse({ userId: currentUser._id, courseId }));
      } catch (error: unknown) {
        const err = error as { response?: { data?: { message?: string } } };
        alert(err.response?.data?.message || "Failed to unenroll");
      }
    }
  };

  const coursesToDisplay = showAllCourses
    ? courses
    : courses.filter((course) => isEnrolled(course._id) || isFaculty);

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
              onClick={onAddNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-warning float-end me-2 ms-2"
              id="wd-edit-course-click"
              onClick={onUpdateCourse}
            >
              Update
            </button>
          </h5>
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            placeholder="Course Name"
          />
          <FormControl
            as="textarea"
            value={course.description}
            rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
            placeholder="Course Description"
          />
          <hr />
        </>
      )}

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {currentUser &&
            coursesToDisplay.map((courseItem) => {
  const enrolled = isEnrolled(courseItem._id);
  return (
    <Col key={courseItem._id} className="wd-dashboard-course-1" style={{ width: 300 }}>
      <Card>
        <Link
          href={`/kambaz/Courses/${courseItem._id}/home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
          onClick={(e) => {
            if (!enrolled && !isFaculty) {
              e.preventDefault();
              alert("Please enroll in this course to access it");
            }
          }}
        >
          <CardImg variant="top" src={courseItem.image} width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
              {courseItem.name}
            </CardTitle>

            <CardText
              className="wd-dashboard-course-description overflow-hidden"
              style={{ height: "100px" }}
            >
              {courseItem.description}
            </CardText>

            {(enrolled || isFaculty) && <Button variant="primary">Go</Button>}

            {isFaculty && (
              <>
                <Button
                  className="btn btn-danger float-end me-2"
                  onClick={(event) => {
                    event.preventDefault();
                    if (confirm(`Are you sure you want to delete "${courseItem.name}"?`)) {
                      onDeleteCourse(courseItem._id);
                    }
                  }}
                >
                  Delete
                </Button>

                <Button
                  className="btn btn-warning me-2 float-end"
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(courseItem);
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
                      handleUnenroll(courseItem._id);
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
                      handleEnroll(courseItem._id);
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