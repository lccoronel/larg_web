import React from 'react';

import Input from '../../components/Input';
import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <section>
        <h4>Bem vindo!</h4>
        <p>Acesse sua conta</p>
      </section>
      <form>
        <Input idLabel="email" label="E-mail" />
        <Input idLabel="password" label="Password" />

        <button type="button">Entrar</button>
      </form>
    </Container>
  );
};

export default SignIn;
