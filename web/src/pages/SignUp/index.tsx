import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import { Button } from "../../components/button/styles";
import { Input } from "../../components/input/styles";
import {
  Container,
} from "./styles";

export default function SignUp() {
  const [nomeDaEmpresa, setNomeDaEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e:React.FormEvent) => {
    e.preventDefault();

  };

  return (
    <>
      <Container onSubmit={handleSignUp}>
        <img src={Logo} alt="Logo makeBurger" />

        <Input placeholder="Nome da empresa" type="email" value={nomeDaEmpresa} onChange={(e) => {setNomeDaEmpresa(e.target.value);}} />
        <Input placeholder="Digite seu email" type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />
        <Input placeholder="Sua senha" type="password" value={password} onChange={(e) => {setPassword(e.target.value);}} />

        <Button type="submit">Criar</Button>

        <Link to="/">Já possuo uma conta</Link>
      </Container>
    </>
  );
}
