import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  font-size: 14px;
  color: #000;

  input {
    margin-top: 10px;
    background-color: transparent;
    border: 1px solid ${lighten(0.3, '#242526')};
    padding: 10px;
    border-radius: 7px;
    font-size: 12px;
    color: --var(colorDark);
  }
`;
