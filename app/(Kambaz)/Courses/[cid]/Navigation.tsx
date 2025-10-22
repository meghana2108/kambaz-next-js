"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";

type Props = { cid: string };

export default function CourseNavigation({ cid }: Props) {
  const pathname = usePathname();

  const links = [
    { label: "Home", path: `/Courses/${cid}/Home` },
    { label: "Modules", path: `/Courses/${cid}/Modules` },
    {
      label: "Piazza",
      path: "https://piazza.com/class/mf9tt3f8vlw16f",
      external: true,
    },
    { label: "Zoom", path: "https://zoom.us/signin#/login", external: true },
    { label: "Assignments", path: `/Courses/${cid}/Assignments` },
    {
      label: "Quizzes",
      path: "https://northeastern.instructure.com/courses/225988/quizzes",
      external: true,
    },
    { label: "People", path: `/Courses/${cid}/People/Table` },
    {
      label: "Grades",
      path: "https://northeastern.instructure.com/courses/225988/grades",
      external: true,
    },
  ];

  return (
    <ListGroup
      id="wd-courses-navigation"
      className="fs-5 rounded-0 wd list-group"
      style={{ minWidth: "170px" }}
    >
      {links.map((link) => {
        const isActive =
          !link.external &&
          (pathname === link.path || pathname.endsWith(link.label));

        return link.external ? (
          <ListGroupItem
            key={link.label}
            as="a"
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="text-danger border-0"
          >
            {link.label}
          </ListGroupItem>
        ) : (
          <ListGroupItem
            key={link.label}
            as={Link}
            href={link.path}
            className={`border-0 position-relative py-2 px-3 ${
              isActive
                ? "text-black border-start border-3 border-black"
                : "text-danger"
            }`}
            style={{
              borderRadius: 0,
              transition: "all 0.2s ease",
            }}
          >
            {link.label}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
}
