import styled from 'styled-components';

import colors from '~/styles/colors';

export const CardWrapper = styled.div`
  background: ${colors.white};
  padding: 20px 30px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(192, 208, 230, 0.8);
`;

export const CardTitle = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${colors.grey};
`;

export const CardBody = styled.div``;
