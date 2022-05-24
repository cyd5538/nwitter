import { useState } from "react";
import { signup, login, useAuth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  OAuthProvider,
} from "firebase/auth";
import styled from "styled-components";
import logo from "../asset/logo.png";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
const LoginStyle = styled.div`
  width: 100%;

  #img {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  #fields {
    display: flex;
    flex-direction: column;
    input {
      height: 50px;
      width: 95%;
      margin-top: 30px;
      font-size: 1.2rem;
      ::placeholder {
        font-size: 1.2rem;
        margin-left: 10px;
      }
    }
  }
`;
const Loginjoinbtn = styled.div`
  display: flex;
  width: 95%;

  button {
    margin-top: 100px;
    height: 50px;
    flex: 1;
    background-color: rgb(3, 169, 244);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 1.3rem;
    margin-left: 3px;
    margin-right: 3px;
    transition: all ease-in 0.3s;
  }
  button:hover {
    transform: scale(1.03);
  }
`;
const GoogleGithub = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  button {
    height: 50px;
    width: 30%;
    font-size: 1.2rem;
    display:flex;
    align-items: center;
    background-color: white;
    transition: all ease-in 0.3s;
    .icon {
      margin-right: 5px;
      font-size: 1.8rem;
    }
  }
  button:hover{
      transform:scale(1.03);
  }
`;
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser;

  const provider = new GoogleAuthProvider();
  const github = new GithubAuthProvider();

  const handleSignup = async () => {
    try {
      await signup(email, password);
      alert("회원가입이 완료되었습니다 로그인해주세요.");
      setEmail("");
      setPassword("");
    } catch {
      if (email === "") {
        alert("이메일을 입력하세요");
      } else if (password === "") {
        alert("패스워드를 입력하세요");
      } else if (user !== null) {
        const emailCheck = user.email;
        if (email === emailCheck) {
          alert("이미 사용중인 이메일입니다.");
        }
      } else {
        alert("이메일과 비밀번호 양식을 확인해 주세요");
      }
    }
  };

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/home");
    } catch {
      if (email === "") {
        alert("이메일을 입력하세요");
      } else if (password === "") {
        alert("패스워드를 입력하세요");
      } else {
        alert("비밀번호 아이디를 확인해주세요");
      }
    }
  };

  //구글 로그인
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      navigate("/home");
    });
  };

  //Github 로그인
  const signInWithGithub = () => {
    signInWithPopup(auth, github).then((result) => {
      localStorage.setItem("isAuth", true);
      navigate("/home");
    });
  };

  return (
    <LoginStyle>
      <img src={logo} alt="logo" id="img" />
      <div id="fields">
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Loginjoinbtn>
        <button id="login" onClick={handleLogin}>
          Log In
        </button>
        <button id="join" onClick={handleSignup}>
          Sign up
        </button>
      </Loginjoinbtn>

      <GoogleGithub>
        <button onClick={signInWithGoogle}>
          <span className="icon">
            <FcGoogle />
          </span>
          <span>Google</span>
        </button>
        <button onClick={signInWithGithub}>
          <span className="icon">
            <BsGithub />
          </span>
          <span>GitHub</span>
        </button>
      </GoogleGithub>
    </LoginStyle>
  );
};

export default Login;
