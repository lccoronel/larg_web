import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LinkProps {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;

  .menu {
    background: var(--colorDark1);
    width: 45vh;
    height: 100vh;

    .info {
      display: flex;
      align-items: center;
      padding: 0 30px;
      width: 100%;
      height: 100px;

      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }

      .person {
        margin-left: 10px;

        h4 {
          text-align: center;
          font-weight: bold;
          font-size: 18px;
          color: #fff;
        }

        p {
          font-size: 10px;
          color: #fff;

          span {
            color: #999;
            margin-right: 5px;
          }
        }
      }
    }

    section {
      padding: 50px 35px;
    }
  }
`;

export const ButtonMenu = styled(Link)<LinkProps>`
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 10px;

  &:hover {
    padding: 10px;
    border-radius: 7px;
    background-color: #18191a;
  }

  & + a {
    margin-top: 20px;
  }

  svg {
    margin-right: 15px;
  }

  p {
    font-size: 18px;
    color: ${props => (props.selected ? '#2c88ff' : '#fff')};
    font-weight: bold;
  }
`;
