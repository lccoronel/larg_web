import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  height: 100vh;
  background-color: var(--colorLight);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    text-align: center;

    h4 {
      font-size: 20px;
      color: var(--colorDark);
    }

    p {
      font-weight: 300;
      margin-top: 10px;
      color: var(--colorDark);
    }
  }

  form {
    width: 25%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 40px;
      border: 0;
      background-color: var(--colorBlue);
      color: white;
      padding: 7px 20px;
      border-radius: 7px;
    }
  }
`;
