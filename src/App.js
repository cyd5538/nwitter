import React from 'react'
import Login from './components/Login';
import Home from './pages/Home'
import Profile from './pages/Profile';
import {Route, Routes} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Theme } from './style/Theme';
import GlobalStyle from './style/GlobalStyle'
import styled from 'styled-components';


const Appstyle = styled.div`
  margin-top: 50px;
  height: 700px;
  width: 600px;

  background-color: white;

`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Appstyle>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </Appstyle>
    </ThemeProvider>
  );
}

export default App;