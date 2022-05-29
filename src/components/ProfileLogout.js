import React from "react";
import { logout } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const ProfileLogoutStyled = styled.div`
display : flex;
flex-direction: column;
button{
    margin-top : 10px;
    width:25%;
    height: 40px;
    font-size: 1rem;
    background-color : rgb(42, 169, 224);
    color: white;
    cursor:pointer;
    border : none;
    transition: all ease-in 0.3s;
  }
 button:hover{
     transform : scale(1.03);
 } 
`

const ProfileLogout = () => {
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch {
      alert("error");
    }
  };
  return (
    <ProfileLogoutStyled>
      <button onClick={handleLogout}>Log Out</button>
    </ProfileLogoutStyled>
  );
};

export default ProfileLogout;
