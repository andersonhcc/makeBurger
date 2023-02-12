import React, { useState } from "react";
import { Button } from "../../components/button/styles";
import { Input } from "../../components/input/styles";
import { Form } from "./styles";

export default function NovaCategoria() {
  const [novaCategoria, setNovaCategoria] = useState("");

  const handleCadastrarNovaCategoria = (e:React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleCadastrarNovaCategoria}>
        <h2>Nova categoria</h2>
        <Input maxLength={100} placeholder="Digite o nome da categoria" type="text" value={novaCategoria} onChange={(e) => {setNovaCategoria(e.target.value);}} />
        <Button type="submit">Cadastrar</Button>
      </Form>
    </>
  );
}
