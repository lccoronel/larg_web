import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  .info {
    display: flex;

    img {
      width: 90px;
      height: 90px;
      border-radius: 7px;
    }

    section {
      margin-left: 15px;

      p {
        font-size: 11px;
        color: var(--colorDark4);
      }

      .functions {
        display: flex;
        margin: 0;
        margin-top: 10px;

        .office {
          background-color: var(--colorGreen);
          padding: 0 7px 2px;
          border-radius: 5px;

          & + .office {
            margin-left: 5px;
          }

          p {
            font-size: 10px;
            font-weight: bold;
            color: #fff;
          }
        }
      }
    }
  }

  button {
    background-color: var(--colorDark0);
    border: 0;
    height: 25px;
    padding: 0 10px;
    border-radius: 7px;

    p {
      color: #fff;
      font-size: 14px;
      margin-bottom: 1px;
    }
  }
`;
