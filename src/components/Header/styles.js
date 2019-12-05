import styled from 'styled-components';

import colors from '~/styles/colors';

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background: ${colors.primary};
  display: flex;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgba(192, 208, 230, 0.8);

  h1 {
    color: ${colors.white};
  }
`;
