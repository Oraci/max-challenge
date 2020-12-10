import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Img,
  Info,
  ContainerInfo,
  ContainerButton,
  ContainerAdditionalInfo,
  ContainerGenres,
  Button,
} from './styles';

function Card({ data }) {
  const primaryGenre = data?.genres?.filter((genre) => genre.is_primary)?.[0];

  const additionalGenres =
    data?.genres
      ?.filter((item) => item.id !== primaryGenre.id && item.name)
      ?.map((item) => item.name)
      ?.toString() || '';

  return data ? (
    <Container>
      <ContainerInfo>
        <Img src={data.image} alt={data.name} />
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
        <ContainerButton>
          <Button>Add</Button>
        </ContainerButton>
      </ContainerAdditionalInfo>
    </Container>
  ) : null;
}

export default React.memo(Card);
