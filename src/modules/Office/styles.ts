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

    .functionsList {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 50px 10px;
      margin: 50px 0 10px;

      .function {
        background-color: #3a3b3c;
        padding: 15px;
        border-radius: 7px;

        .headerFunction {
          display: flex;
          align-items: center;
          justify-content: space-between;

          div {
            p {
              color: #afb3b9;
            }
          }

          .infos {
            display: flex;
            align-items: center;

            .level {
              display: flex;
              flex-direction: column;
              align-items: center;

              h2 {
                background-color: #afb3b9;
                color: #242526;
                padding: 0 7px;
                font-size: 16px;
                border-radius: 50%;
              }

              p {
                font-size: 10px;
                margin-top: 5px;
                font-weight: bold;
              }
            }

            .situacion {
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-left: 20px;

              svg {
                background-color: var(--colorGreen);
                color: #242526;
                padding: 5px;
                border-radius: 50%;
              }

              p {
                color: var(--colorGreen);
                font-size: 10px;
                margin-top: 5px;
                font-weight: bold;
              }
            }
          }
        }

        .description {
          font-size: 13px;
          margin-top: 20px;
          color: #afb3b9;
        }
      }
    }
  }
`;
