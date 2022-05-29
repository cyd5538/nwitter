import React from "react";
import Nav from "./Nav";
import ProfileImage from "../components/ProfileImage";
import ProfileLogout from "../components/ProfileLogout";
import ProfileCurrent from "../components/ProfileCurrent";


const Profile = () => {

  return (
    <div>
      <Nav />
      <ProfileCurrent />
      <ProfileImage />
      <ProfileLogout />
    </div>
  );
};

export default Profile;
