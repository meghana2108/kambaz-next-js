"use client";
import React, { useState } from "react";
import PeopleDetails from "./details";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable({ 
  users = [], 
  fetchUsers 
}: { 
  users?: any[]; 
  fetchUsers?: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);

  const handleCloseDetails = () => {
    setShowDetails(false);
    setShowUserId(null);
  };

  const handleUpdate = () => {
    if (fetchUsers) {
      fetchUsers();
    }
  };

  return (
    <div id="wd-people-table">
      {showDetails && (
        <PeopleDetails 
          uid={showUserId} 
          onClose={handleCloseDetails}
          onUpdate={handleUpdate}
        />
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
          {users.map((user: any, index: number) => {
            const userId = user._id || user.id || `user-${index}`;
            return (
              <tr key={userId}>
                <td className="wd-full-name text-nowrap">
                  <span 
                    className="text-decoration-none" 
                    onClick={() => {
                      if (user._id) {
                        setShowDetails(true); 
                        setShowUserId(user._id);
                      }
                    }}
                    style={{ cursor: user._id ? "pointer" : "default" }}
                  >
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
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}