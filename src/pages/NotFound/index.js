import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Container from '~/components/Container';
import Title from '~/components/Title';
import Button from '~/components/Button';

import { EmptyContent } from './styles';

import notFoundImage from '~/assets/not-found.svg';

export default function NotFound() {
  return (
    <Container>
      <Title>
        <h1>PÁGINA NÃO ENCONTRADA</h1>
      </Title>

      <EmptyContent>
        <div>
          <h1>Hmm, parece que você não chegou aqui porque quis, né?</h1>
          <p>
            Este lugar é escuro demais e não é conhecido pela Provi... Que tal
            voltar para casa?
          </p>

          <Link to="/">
            <Button text="VOLTAR PARA CASA" icon={MdArrowBack} />
          </Link>
        </div>

        <img src={notFoundImage} alt="Page not found" />
      </EmptyContent>
    </Container>
  );
}
