import React from 'react';
import Input from '../../components/Input';
import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <section>
        <h4>WELCOME!</h4>
        <p>Sign in to your account</p>
      </section>
      <form>
        <Input idLabel="email" label="E-mail" />
        <Input idLabel="password" label="Password" />

        <button type="button">Sign</button>
      </form>
    </Container>
  );
};

export default SignIn;
