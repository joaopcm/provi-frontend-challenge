import React from 'react';
import PropTypes from 'prop-types';

import { CardWrapper, CardBody, CardTitle } from './styles';

export default function Card({ children, title }) {
  return (
    <CardWrapper>
      <CardTitle>
        <h2>{title}</h2>
      </CardTitle>
      <CardBody>{children}</CardBody>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
