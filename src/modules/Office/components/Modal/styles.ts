import styled from 'styled-components';
import { Modal } from '@material-ui/core';
import { lighten } from 'polished';

export const Container = styled(Modal)`
  display: flex;
  justify-content: center;

  .containerModal {
    background: #242526;
    margin-top: 2%;
    width: 45%;
    height: 55%;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid ${lighten(0.1, '#242526')};

      h3 {
        font-weight: bold;
        text-align: center;
      }

      button {
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        background-color: ${lighten(0.2, '#242526')};
        border: 0;
      }
    }

    .main {
      padding: 10px 0;
      height: 100%;
      overflow: scroll;

      p {
        color: ${lighten(0.4, '#242526')};
        font-size: 14px;
      }

      form {
        margin: 20px 0;

        h4 {
          margin-top: 20px;
        }

        .row {
          display: flex;

          button {
            height: 37px;
            padding: 0 10px;
            margin-left: 20px;
            display: flex;
            align-self: flex-end;
            align-items: center;
            justify-content: center;
            border-radius: 7px;
            border: 0;
            background-color: #2c88ff;
            color: #fff;
          }
        }

        .labelSelect {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
          font-size: 14px;

          select {
            margin-top: 10px;
            background-color: transparent;
            padding: 10px;
            border-radius: 7px;
            color: #fff;
          }
        }
      }
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding-top: 20px;
      border-top: 1px solid ${lighten(0.1, '#242526')};

      button {
        padding: 5px 10px;
        border-radius: 7px;
        background-color: ${lighten(0.2, '#242526')};
        border: 0;
        color: #fff;

        & + button {
          margin-left: 10px;
          padding: 5px 30px;
        }
      }
    }
  }
`;
