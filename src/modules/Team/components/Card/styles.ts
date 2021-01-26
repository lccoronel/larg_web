import styled from 'styled-components';

export const Container = styled.div`
  background: #242526;
  border-radius: 10px;
  padding: 15px 20px;
  width: 170px;

  & + div {
    margin-left: 10px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #fff;
      font-weight: bold;
      font-size: 15px;
    }

    .iconBall {
      padding: 7px;
      border-radius: 20px;
    }
  }

  .number {
    color: #fff;
    font-size: 18px;
    margin-top: 15px;

    .people {
      font-size: 18px;
      margin-left: 10px;
    }
  }
`;
