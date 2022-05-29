import React from "react";
import { useAuth } from "../firebase";
import styled from "styled-components";

const ProfileCurrentStyle = styled.div`
  text-align: center;
  div {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const ProfileCurrent = () => {
  const currentUser = useAuth();
  return (
    <ProfileCurrentStyle>
      <div>환영합니다 {currentUser?.email}</div>
    </ProfileCurrentStyle>
  );
};

export default ProfileCurrent;
