import React from 'react';
import { FiMail, FiLock } from 'react-icons/fi';

import backgroundImg from '../../assets/background/landing@3x.png';
import Input from '../../components/Input';
import { Entrance, Container, Content } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Entrance>
        <img src={backgroundImg} alt="LARG" />
        <h4>Control of your work is here</h4>
        <p>Make your workday more organized and productive</p>
      </Entrance>

      <Content>
        <h4>WELCOME!</h4>
        <p>Sign in to your account</p>
        <form action="">
          <p className="explain">Username</p>
          <Input name="email" icon={FiMail} />

          <p className="explain">Password</p>
          <Input name="password" type="password" icon={FiLock} />
        </form>

        <p className="link">Forgot the password?</p>

        <button type="button">Login</button>
      </Content>
    </Container>
  );
};

export default SignIn;
