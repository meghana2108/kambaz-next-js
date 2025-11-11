"use client";

import { redirect } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";
import { Button, FormControl } from "react-bootstrap";

/** ✅ Strong, flexible type for user data */
interface UserProfile {
  _id?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  email?: string;
  // Allow both known roles and any string (to match database)
  role?: "USER" | "ADMIN" | "FACULTY" | "STUDENT" | string;
}

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );

  // ✅ Local editable copy of current user's data
  const [profile, setProfile] = useState<UserProfile>({});

  // ✅ Load profile from Redux when available
  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
    } else {
      setProfile(currentUser);
    }
  }, [currentUser]);

  // ✅ Sign out function
  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  return (
    <div className="wd-profile-screen p-4">
      <h3>Profile</h3>

      {profile && (
        <div>
          <FormControl
            id="wd-username"
            className="mb-2"
            defaultValue={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <FormControl
            id="wd-password"
            className="mb-2"
            defaultValue={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <FormControl
            id="wd-firstname"
            className="mb-2"
            defaultValue={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <FormControl
            id="wd-lastname"
            className="mb-2"
            defaultValue={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <FormControl
            id="wd-dob"
            className="mb-2"
            type="date"
            defaultValue={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <FormControl
            id="wd-email"
            className="mb-2"
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />

          <select
            className="form-control mb-2"
            id="wd-role"
            defaultValue={profile.role}
            onChange={(e) =>
              setProfile({
                ...profile,
                role: e.target.value as UserProfile["role"],
              })
            }
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <Button
            onClick={signout}
            className="w-100 mb-2"
            id="wd-signout-btn"
            variant="danger"
          >
            Sign out
          </Button>
        </div>
      )}
    </div>
  );
}
