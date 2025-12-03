"use client";
import React, { useState } from "react";
import PeopleDetails from "../details";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers?: () => void }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
    return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails uid={showUserId} onClose={() => { setShowDetails(false); fetchUsers(); }} />
      )}
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
          {users.map((user: any) => (
            <tr key={user._id}>
              <td className="wd-full-name text-nowrap">
                <span className="text-decoration-none" onClick={() => {setShowDetails(true); setShowUserId(user._id);}}>
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                {user.firstName} {user.lastName}
                </span>
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
