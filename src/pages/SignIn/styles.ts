import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Entrance = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  flex-direction: column;

  img {
    width: 50%;
  }

  H4 {
    margin-top: 50px;
    color: #6842c2;
    font-size: 35px;
    font-weight: 400;
    text-align: center;
  }

  p {
    color: #999;
    font-size: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 550px;
  background-color: #6842c2;

  h4 {
    font-size: 20px;
  }

  p {
    font-weight: 300;
    margin-top: 10px;
  }

  form {
    margin-top: 30px;

    .explain {
      font-weight: 300;
      margin-bottom: 5px;
    }
  }

  button {
    margin-top: 50px;
    background: #09d361;
    border: 0;
    width: 60%;
    height: 50px;
    border-radius: 10px;
    color: #fff;
    font-size: 18px;

    &:hover {
      background: ${shade(0.1, '#09d361')};
    }
  }
`;
