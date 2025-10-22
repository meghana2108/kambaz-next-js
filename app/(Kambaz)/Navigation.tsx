"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function KambazNavigation() {
  const pathname = usePathname();

  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", icon: LiaBookSolid },
    {
      label: "Calendar",
      path: "https://northeastern.instructure.com/calendar#view_name=month&view_start=2025-09-22",
      icon: IoCalendarOutline,
      external: true,
    },
    {
      label: "Inbox",
      path: "https://northeastern.instructure.com/conversations#filter=type=inbox",
      icon: FaInbox,
      external: true,
    },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      {/* Northeastern logo link */}
      <ListGroupItem
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        action
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroupItem>

      {/* Account link */}
      <ListGroupItem
        as={Link}
        href="/Account"
        className={`text-center border-0 bg-black ${
          pathname.includes("Account")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroupItem>

      {/* ✅ REPLACE THIS WHOLE SECTION BELOW */}
      {links.map((link) =>
        link.external ? (
          <ListGroupItem
            key={`${link.label}-${link.path}`}
            as="a"
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-center border-0 text-white bg-black"
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </ListGroupItem>
        ) : (
          <ListGroupItem
            key={`${link.label}-${link.path}`}
            as={Link}
            href={link.path}
            className={`bg-black text-center border-0 ${
              pathname.includes(link.label)
                ? "text-danger bg-white"
                : "text-white bg-black"
            }`}
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </ListGroupItem>
        )
      )}
      {/* ✅ UNTIL HERE */}
    </ListGroup>
  );
}
