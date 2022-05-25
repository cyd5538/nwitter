import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";


const FormStyle = styled.form`
  diplay: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  input {
    width: 85%;
    height: 50px;
    border-radius: 20px;
    font-size: 1.2rem;
    font-weight: bold;
    padding-left: 5%;
    border: 3px solid rgb(3, 169, 244);
    ::placeholder {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }

  div {
    position: absolute;
    top: 2px;
    right: 22px;
  }

  div button {
    cursor: pointer;
    border-radius: 26px;
    width: 60px;
    height: 52px;
    background-color: rgb(3, 169, 244);
    color: white;
    font-size: 1.1rem;
    border: 1px solid black;
  }
`;

const Home = () => {


  return (
    <>
      <Nav />
      <FormStyle>
        <input
          placeholder="트윗을 작성해주세요."

          }}
        />
        <div>
          <button >Enter</button>
        </div>
      </FormStyle>
    </>
  );
};

export default Home;
