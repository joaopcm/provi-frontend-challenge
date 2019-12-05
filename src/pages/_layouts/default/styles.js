import styled from 'styled-components';

import colors from '~/styles/colors';
import background from '~/assets/background.png';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.secondary} url(${background}) no-repeat center center
    fixed;
  background-size: cover;
`;
