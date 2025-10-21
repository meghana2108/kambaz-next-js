"use client";
import React from "react";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;
  const enrolledUsers = users.filter((usr) =>
    enrollments.some(
      (enrollment) =>
        enrollment.user === usr._id &&
        enrollment.course.toLowerCase() === (cid as string).toLowerCase()
    )
  );

  return (
    <div id="wd-people-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolledUsers.map((user) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                {user.firstName} {user.lastName}
              </td>
              <td className="wd-login-id">{user.username}</td>
              <td className="wd-section">{user.section ?? "N/A"}</td>
              <td className="wd-role">{user.role ?? "Student"}</td>
              <td className="wd-last-activity">{user.lastActivity ?? "-"}</td>
              <td className="wd-total-activity">{user.totalActivity ?? "-"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
