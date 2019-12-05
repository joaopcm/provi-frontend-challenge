import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <h1>Provi</h1>
        <Link to="/">DASHBOARD</Link>
      </nav>

      <aside>
        <Profile>
          <div>
            <strong>João Melo</strong>
            <span>MEU PERFIL</span>
          </div>
          <img
            src="https://api.adorable.io/avatars/285/jopcmelo@gmail.com"
            alt="Foto de perfil de João Melo"
          />
        </Profile>
      </aside>
    </Container>
  );
}
