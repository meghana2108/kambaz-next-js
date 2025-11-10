/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useRouter } from "next/navigation";
import {redirect} from "next/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import Link from "next/link";
import { FormControl, FormSelect, Button } from "react-bootstrap";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    if (!currentUser) {
      redirect("/kambaz/Account/signin");
    } else {
      setProfile(currentUser);
    }
  }, [currentUser]);

  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/signin");
  };

  return (
    <div style={{ width: "300px" }}>
      <h3>Profile</h3>

      {profile && (
        <div>
          <FormControl className="mb-2" defaultValue={profile.username} />
          <FormControl className="mb-2" type="password" defaultValue={profile.password} />
          <FormControl className="mb-2" defaultValue={profile.firstName} />
          <FormControl className="mb-2" defaultValue={profile.lastName} />
          <FormControl className="mb-2" type="date" defaultValue={profile.dob} />
          <FormControl className="mb-2" defaultValue={profile.email} />

          <FormSelect className="mb-2" defaultValue={profile.role}>
            <option value="Faculty">Faculty</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </FormSelect>

          <Button className="btn btn-primary w-100 mb-2" onClick={signout}>
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
