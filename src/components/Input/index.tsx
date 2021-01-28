import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  idLabel: string;
  inputRow?: boolean;
}

const Input: React.FC<InputProps> = ({ label, idLabel, inputRow, ...rest }) => {
  return (
    <Container htmlFor={idLabel} style={{ marginLeft: inputRow ? 20 : 0 }}>
      {label}
      <input type="text" id={idLabel} {...rest} />
    </Container>
  );
};

export default Input;
