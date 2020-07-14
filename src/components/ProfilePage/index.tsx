import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Lucas Grober</h1>
        <h2>@grober39</h2>

        <p>
          Developer at <a href="https://www.comdinheiro.com.br">@Comdinheiro</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Jundiaí
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 26 de junho de 1996
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>122</strong>
          </span>
          <span>
            <strong>1245 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
