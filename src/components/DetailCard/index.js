import React from 'react';

import FavoriteButton from 'components/FavoriteButton';

import noImage from 'assets/no-image.png';

import {
  Container,
  Img,
  Info,
  ContainerInfo,
  ContainerAdditionalInfo,
  ContainerGenres,
} from './styles';

function DetailCard({ data }) {
  const primaryGenre = data?.genres?.filter((genre) => genre.is_primary)?.[0];

  const additionalGenres =
    data?.genres
      ?.filter((item) => item.id !== primaryGenre.id && item.name)
      ?.map((item) => item.name)
      ?.toString() || '';

  return Object.keys(data).length > 0 ? (
    <Container>
      <ContainerInfo>
        <Img src={data.image || noImage} alt={data.name} />
        <Info>
          <h1>{data.name}</h1>
          <p>Primary Genre: {primaryGenre.name}</p>
          <p>Popularity Score: {data.popularity}</p>
        </Info>
      </ContainerInfo>
      <ContainerAdditionalInfo>
        <ContainerGenres>
          <p>Additional Genres:</p>
          <p>{additionalGenres}</p>
        </ContainerGenres>
        <FavoriteButton data={data} />
      </ContainerAdditionalInfo>
    </Container>
  ) : null;
}

export default React.memo(DetailCard);
