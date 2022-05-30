import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useAuth, upload } from "../firebase";

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
    top: 1px;
    right: 20px;
  }

  div button {
    cursor: pointer;
    border-radius: 26px;
    width: 60px;
    height: 55px;
    background-color: rgb(3, 169, 244);
    color: white;
    font-size: 1.1rem;
    border: 1px solid black;
    transition: all ease-in 0.3s;
  }
  div button:hover {
    transform: scale(1.05);
  }
`;

const HomeInput = () => {
  const currentUser = useAuth();
  const [title, setTitle] = useState("");



  const postsCollectionRef = collection(db, "posts");

  const createTwit = async (e) => {

    e.preventDefault();
    await addDoc(postsCollectionRef, {
      title,
      author: {
        name: auth.currentUser.displayName || auth.currentUser.email,
        id: auth.currentUser.uid,
      },
      timestamp : Date(),
    });
    setTitle("");
  };



  return (
    <FormStyle>
      <input
        placeholder="트윗을 작성해주세요."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input 
        placeholder="사진을 넣어주세요"
        type="file"
        onChange={handleChange}
      />
      <div>
        <button onClick={createTwit}>Enter</button>
      </div>
    </FormStyle>
  );
};

export default HomeInput;
