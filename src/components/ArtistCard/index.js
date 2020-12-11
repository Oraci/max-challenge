import React from 'react';

import FavoriteButton from 'components/FavoriteButton';

import noImage from 'assets/no-image.png';

import { Container, Img, Info } from './styles';

function ArtistCard({ data, onHandleTitleClick }) {
  const primaryGenre = data?.genres?.filter((genre) => genre.is_primary)?.[0];

  return data ? (
    <Container>
      <Img src={data.image || noImage} alt={data.name} />
      <Info>
        <h1 onClick={onHandleTitleClick}>{data.name}</h1>
        <p>{primaryGenre.name}</p>
      </Info>
      <FavoriteButton data={data} />
    </Container>
  ) : null;
}

export default React.memo(ArtistCard);
