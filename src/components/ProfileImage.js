import { useEffect, useState, useRef } from "react";
import { useAuth, upload } from "../firebase";
import Avatar from "@mui/material/Avatar";
import styled from "styled-components";

const ProfileImageStyle = styled.div`
  display: flex;
  flex-direction: column;
  button{
    margin-top : 20px;
    width:25%;
    height: 40px;
    font-size: 1rem;
    background-color : rgb(42, 169, 224);
    color: white;
    cursor:pointer;
  }
`

export default function Profile() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);
  const ImageRef = useRef();

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }
  const handleClick = () => {
    upload(photo, currentUser, setLoading);
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser,photoURL]);

  return (
    <ProfileImageStyle>
      <Avatar
        alt="Remy Sharp"
        src={photoURL}
        sx={{ width: 200, height: 200 }}
        onClick={() => {
          ImageRef.current.click();
        }}
      />
      <input
        ref={ImageRef}
        type="file"
        onChange={handleChange}
        style={{ display: "none" }}
      />
      <button disabled={loading || !photo} onClick={handleClick}>
        Image Upload
      </button>
    </ProfileImageStyle>
  );
}
