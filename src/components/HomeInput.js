import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, auth, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes, listAll } from "firebase/storage";
import { addDoc,collection } from "firebase/firestore";

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
  const [title, setTitle] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const postsCollectionRef = collection(db, "posts");

  const createTwit = async (e) => {
    e.preventDefault();
    uploadFile()
    await addDoc(postsCollectionRef, {
      title,
      author: {
        name: auth.currentUser.displayName || auth.currentUser.email,
        id: auth.currentUser.uid,
      },
      timestamp: Date(),
    });
    setTitle("");
  };

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const handleChange = (e) => {
    setImageUpload(e.target.files[0]);
  };

  return (
    <FormStyle>
      <input
        placeholder="????????? ??????????????????."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
      />
      <input
        placeholder="????????? ???????????????"
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
