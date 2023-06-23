import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { BiTargetLock } from "react-icons/bi";
import Logo from "../../assets/images/logo.png";
import * as S from "./styles";
import Button from '../../components/Button';
import { useStore } from "../../store";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const LoginPage = () => {
  const { setToken } = useStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordShown, setPasswordShown] = useState(false);

  const handleSubmit = async () => {
    if (email === "jonhdoe@gmail.com" && password === "12345") {
      setToken(token);
    }
    navigate("/");
  };


  return (
    <S.Login>
      <S.LoginCard>
        <S.LoginTop>
          <S.LoginLogo src={Logo} alt="logo" />
        </S.LoginTop>
        <S.LoginTitle>Login</S.LoginTitle>
        <S.LoginInputWrapper>
          <S.LoginInput
            placeholder="Email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </S.LoginInputWrapper>
        <S.LoginInputWrapper>
          <S.LoginInput
            placeholder="Password"
            type={passwordShown ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.LoginIcon>
            <BiTargetLock
              size={24}
              onClick={() => setPasswordShown(!passwordShown)}
            />
          </S.LoginIcon>
        </S.LoginInputWrapper>
        <S.LoginFooter>
          <Button label="Login" onClick={handleSubmit} />
        </S.LoginFooter>
      </S.LoginCard>
    </S.Login>
  );
};

export default LoginPage;
