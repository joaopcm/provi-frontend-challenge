import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdRefresh } from 'react-icons/md';

import Container from '~/components/Container';
import Card from '~/components/Card';
import Title from '~/components/Title';
import Button from '~/components/Button';

import { Content } from './styles';

import { loadRequest } from '~/store/modules/loan/actions';

export default function Dashboard() {
  const loading = useSelector(state => state.loan.loading);

  function loadLoans() {
    // useDispatch(loadRequest());
  }

  return (
    <Container>
      <Title>
        <h1>Dashboard</h1>

        <div>
          <Button
            type="button"
            text={loading ? 'CARREGANDO...' : 'RECARREGAR'}
            icon={MdRefresh}
            onClick={loadLoans}
          />
        </div>
      </Title>

      <Content>
        <Card title="MINHAS PRÓXIMAS PARCELAS">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
        <Card title="VALOR DOS MEUS EMPRÉSTIMOS">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
        <Card title="QUANTO EU JÁ PAGUEI">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
        <Card title="MEUS JUROS">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            consectetur neque cum, nemo natus autem! Debitis voluptatum
            molestiae ullam, fuga beatae eum quas dignissimos odit fugiat
            ratione nostrum itaque dolores!
          </p>
        </Card>
      </Content>
    </Container>
  );
}
