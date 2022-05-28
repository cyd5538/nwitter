import React from "react";
import Nav from "./Nav";
import { logout, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import ProfileImage from "../components/ProfileImage";


const Profile = () => {
  let navigate = useNavigate();
  const currentUser = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("error");
    }
  };
  return (
    <div>
      <Nav />
      <ProfileImage />
      <div>환영합니다 {currentUser?.email}</div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default Profile;
