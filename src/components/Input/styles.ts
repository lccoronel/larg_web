import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 25px 12px;
  background-color: ${shade(0.2, '#6842c2')};
  display: flex;
  align-items: center;

  input {
    color: #fff;
    background: transparent;
    margin-left: 10px;
  }
`;
