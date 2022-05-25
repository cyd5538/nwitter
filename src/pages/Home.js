import React from "react";
import HomeContents from "../components/HomeContents";
import HomeInput from "../components/HomeInput";
import Nav from "./Nav";


const Home = () => {

  return (
    <>
      <Nav />
      <HomeInput />
      <HomeContents />
    </>
  );
};

export default Home;
