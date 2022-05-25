import React from "react";
import logo from "../asset/logo.png";
import { FcBusinessman } from "react-icons/fc";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HomeStyle = styled.div`
  .menu {
    margin: 10px auto;
    width: 30%;
    display: flex;
    justify-content: center;
    div {
      transition: all ease-in 0.3s;
      cursor: pointer;
    }
    div:last-child {
      font-size: 4rem;
    }
    div:hover {
      transform: scale(1.05);
    }
  }
`;
const Nav = () => {
  return (
    <HomeStyle>
      <div className="menu">
        <div>
          <Link to="/home">
            <img src={logo} alt="home" width="75" />
          </Link>
        </div>
        <div>
          <Link to="/profile">
            <FcBusinessman />
          </Link>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Nav;
