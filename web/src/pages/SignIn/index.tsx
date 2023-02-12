import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { Button } from "../../components/button/styles";
import { Input } from "../../components/input/styles";
import { useNavigate } from "react-router-dom";
import {
  Container,
} from "./styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e:React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <Container onSubmit={handleSignIn}>
        <img src={Logo} alt="Logo makeBurger" />

        <Input placeholder="Digite seu email" type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />
        <Input placeholder="Sua senha" type="password" value={password} onChange={(e) => {setPassword(e.target.value);}} />

        <Button type="submit">Acessar</Button>

        <Link to="/criar-conta">Registrar minha empresa</Link>
      </Container>
    </>
  );
}
