"use client";
import { useEffect, useState, useCallback } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../client";
import { FormControl, FormSelect } from "react-bootstrap";

interface User {
  _id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  loginId?: string;
  section?: string;
  totalActivity?: string;
}

export default function PeopleDetails({
  uid,
  onClose,
  onUpdate,
}: {
  uid: string | null;
  onClose: () => void;
  onUpdate?: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = useCallback(async () => {
    if (!uid) return;
    try {
      const fetchedUser = await client.findUserById(uid);
      setUser(fetchedUser);
      setName(`${fetchedUser.firstName || ""} ${fetchedUser.lastName || ""}`);
      setEmail(fetchedUser.email || "");
      setRole(fetchedUser.role || "STUDENT");
    } catch (error) {
      console.error("Error fetching user:", error);
      setUser(null);
    }
  }, [uid]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const saveUser = async () => {
    if (!user) return;
    const [firstName, lastName] = name.split(" ");
    const updatedUser: User = { 
      ...user, 
      firstName, 
      lastName,
      email,
      role
    };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    if (onUpdate) onUpdate();
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    if (onUpdate) onUpdate();
    onClose();
  };

  if (!uid) return null;
  if (!user) return null;

  return (
    <div
      className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25"
      style={{ zIndex: 1000 }}
    >
      <button
        onClick={onClose}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />
      
      <div className="text-danger fs-4 wd-name mb-3">
        {!editing && (
          <FaPencil
            className="fs-5 mt-2 float-end wd-edit"
            onClick={() => setEditing(true)}
            style={{ cursor: "pointer" }}
          />
        )}
        {editing && (
          <FaCheck
            className="fs-5 mt-2 me-2 float-end wd-save"
            onClick={saveUser}
            style={{ cursor: "pointer" }}
          />
        )}
        {!editing && (
          <div
            className="wd-name"
            onClick={() => setEditing(true)}
            style={{ cursor: "pointer" }}
          >
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <FormControl
            className="w-75 wd-edit-name mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="First Last"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              }
            }}
          />
        )}
      </div>

      <div className="mb-2">
        <b>Email:</b>{" "}
        {!editing && <span className="wd-email">{user.email || "N/A"}</span>}
        {editing && (
          <FormControl
            type="email"
            className="mt-1 wd-edit-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
          />
        )}
      </div>

      <div className="mb-2">
        <b>Role:</b>{" "}
        {!editing && <span className="wd-roles">{user.role}</span>}
        {editing && (
          <FormSelect
            className="mt-1 wd-edit-role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="STUDENT">Student</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Admin</option>
            <option value="TA">TA</option>
          </FormSelect>
        )}
      </div>

      <b>Login ID:</b>{" "}
      <span className="wd-login-id">{user.loginId || user.username}</span>
      <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span>
      <br />
      <b>Total Activity:</b>{" "}
      <span className="wd-total-activity">{user.totalActivity}</span>
      <hr />
      <button
        onClick={() => deleteUser(uid)}
        className="btn btn-danger float-end wd-delete"
      >
        Delete
      </button>
      <button
        onClick={onClose}
        className="btn btn-secondary float-start me-2 wd-cancel"
      >
        Cancel
      </button>
    </div>
  );
}