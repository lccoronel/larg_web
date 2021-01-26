import styled from 'styled-components';

export const Container = styled.div`
  background-color: #18191a;
  width: 100vw;
  height: 100vh;
  padding: 50px 30px 20px;

  .options {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: bold;
      font-size: 30px;
    }

    div {
      .addUser {
        display: flex;
        align-items: center;
        background-color: #1cb508;
        color: #fff;
        border: 0;
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 15px;

        svg {
          margin-right: 10px;
        }
      }
    }
  }

  .cards {
    margin-top: 30px;
    display: flex;
  }

  .list {
    background: #242526;
    width: 100%;
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 10px;

    .listOptions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      h4 {
        font-weight: bold;
        font-size: 20px;
      }

      .search {
        background-color: #3a3b3c;
        border-radius: 15px;
        padding: 5px 10px;
        display: flex;
        align-items: center;

        svg {
          margin-right: 5px;
        }

        input {
          background-color: transparent;
          border: 0;
          color: #fff;
          font-size: 16px;

          &::placeholder {
            color: var(--colorDark4);
          }
        }
      }
    }

    .usersList {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px 10px;
      margin: 50px 0 10px;
    }
  }
`;
