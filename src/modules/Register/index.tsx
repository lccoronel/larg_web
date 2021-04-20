import React from 'react';

import Input from '../../components/Input';
import { Container } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <h1>Register</h1>

      <section>
        <h4>Comece agora</h4>
        <p>Preencha os campos com suas informações</p>
      </section>
      <form>
        <Input idLabel="name" label="Nome do salão/studio/barbearia" />
        <Input idLabel="street" label="Rua" />
        <Input idLabel="number" label="Numero" />
        <Input idLabel="district" label="Bairro" />
        <Input idLabel="zip" label="Cep" />
        <Input idLabel="email" label="E-mail" />
        <Input idLabel="senha" label="Senha" />

        <button type="button">Entrar</button>
      </form>
    </Container>
  );
};

export default Register;
