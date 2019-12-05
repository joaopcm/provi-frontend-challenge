import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 4px 0 rgba(192, 208, 230, 0.8);

  h1 {
    color: ${colors.white};
  }

  nav {
    display: flex;
    align-items: center;

    h1 {
      font-size: 28px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid ${colors.grey};
    }
  }

  a {
    font-weight: bold;
    color: ${colors.white};
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: ${colors.white};
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: ${colors.grey};
    }
  }

  img {
    border: 2px solid ${colors.white};
    height: 32px;
    width: 32px;
    border-radius: 50%;
  }
`;
