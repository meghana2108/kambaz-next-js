"use client";
import * as client from "../client"
import type { User } from "../client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";  
import {  useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { FormControl, FormSelect, Button } from "react-bootstrap";
import axios from "axios";

export default function Profile() {
  const [profile, setProfile] = useState<User>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();
  
  const fetchProfile = useCallback(async () => { 
    try {
      const userProfile = await client.profile();
      setProfile(userProfile);
      dispatch(setCurrentUser(userProfile));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Fetch error:", error.response?.data);

        if (error.response?.status === 401) {
          router.push("/kambaz/Account/signin");
        }
      } else {
        console.error("Unknown error:", error);
      }
    }
  }, [dispatch, router]); 

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);  

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/kambaz/Account/signin");
  };

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      setProfile(updatedProfile);
      dispatch(setCurrentUser(updatedProfile));
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Update error:', error);
      alert('Failed to update profile');
    }
  };

  if (!profile || !profile.username) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: "300px" }}>
      <h3>Profile</h3>

      <FormControl 
        className="mb-2" 
        value={profile.username || ""} 
        onChange={(e) => setProfile({...profile, username: e.target.value})} 
        placeholder="Username"
      />
      <FormControl 
        className="mb-2" 
        type="password" 
        value={profile.password || ""} 
        onChange={(e) => setProfile({...profile, password: e.target.value})} 
        placeholder="Password"
      />
      <FormControl 
        className="mb-2" 
        value={profile.firstName || ""} 
        onChange={(e) => setProfile({...profile, firstName: e.target.value})} 
        placeholder="First Name"
      />
      <FormControl 
        className="mb-2" 
        value={profile.lastName || ""} 
        onChange={(e) => setProfile({...profile, lastName: e.target.value})} 
        placeholder="Last Name"
      />
      <FormControl 
        className="mb-2" 
        type="date" 
        value={profile.dob?.split('T')[0] || ""} 
        onChange={(e) => setProfile({...profile, dob: e.target.value})} 
      />
      <FormControl 
        className="mb-2" 
        type="email" 
        value={profile.email || ""} 
        onChange={(e) => setProfile({...profile, email: e.target.value})} 
        placeholder="Email" 
      />

      <FormSelect 
        className="mb-2" 
        value={profile.role || "STUDENT"}
        onChange={(e) => setProfile({...profile, role: e.target.value})}
      >
        <option value="STUDENT">Student</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="TA">TA</option>
      </FormSelect>
      
      <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
        Update
      </button>
      <Button className="btn btn-danger w-100 mb-2" onClick={signout}>
        Sign out  
      </Button>
    </div>
  );
}