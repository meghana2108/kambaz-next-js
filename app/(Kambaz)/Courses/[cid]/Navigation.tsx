"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";

type CourseNavigationProps = {
  cid: string;
};

export default function CourseNavigation({ cid }: CourseNavigationProps) {
  return (
    <ListGroup
      id="wd-courses-navigation"
      className="fs-5 rounded-0 wd list-group"
      style={{ minWidth: "170px" }}
    >
      <ListGroupItem
        as={Link}
        href={`/Courses/${cid}/Home`}
        id="wd-course-home-link"
        className="active border-0"
      >
        Home
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href={`/Courses/${cid}/Modules`}
        id="wd-course-modules-link"
        className="text-danger border-0"
      >
        Modules
      </ListGroupItem>

      <ListGroupItem
        as="a"
        href="https://piazza.com/class/mf9tt3f8vlw16f"
        id="wd-course-piazza-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-danger border-0"
      >
        Piazza
      </ListGroupItem>

      <ListGroupItem
        as="a"
        href="https://zoom.us/signin#/login"
        id="wd-course-zoom-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-danger border-0"
      >
        Zoom
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href={`/Courses/${cid}/Assignments`}
        id="wd-course-assignments-link"
        className="text-danger border-0"
      >
        Assignments
      </ListGroupItem>

      <ListGroupItem
        as="a"
        href="https://northeastern.instructure.com/courses/225988/quizzes"
        id="wd-course-quizzes-link"
        target="_blank"
        rel="noopener noreferrer"
        className="text-danger border-0"
      >
        Quizzes
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href={`/Courses/${cid}/People/Table`}
        id="wd-course-people-link"
        className="text-danger border-0"
      >
        People
      </ListGroupItem>
    </ListGroup>
  );
}
