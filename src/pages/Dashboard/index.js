import React from 'react';

import Container from '~/components/Container';
import Card from '~/components/Card';
import Title from '~/components/Title';

export default function Dashboard() {
  return (
    <Container>
      <Title>
        <h1>Dashboard</h1>
      </Title>

      <Card title="Títlo">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          consectetur neque cum, nemo natus autem! Debitis voluptatum molestiae
          ullam, fuga beatae eum quas dignissimos odit fugiat ratione nostrum
          itaque dolores!
        </p>
      </Card>
    </Container>
  );
}
