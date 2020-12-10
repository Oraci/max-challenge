import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ArtistsContext, Actions } from 'context/ArtistsContext';

import { Container, Img, Info, ContainerButton, Button } from './styles';

function Card({ data }) {
  const primaryGenre = data?.genres?.filter((genre) => genre.is_primary)?.[0];

  const history = useHistory();
  const { dispatch } = useContext(ArtistsContext);

  const onHandleClick = useCallback((id) => {
    dispatch({ type: Actions.SET_SELECTED_ARTIST, payload: data });

    history.push(`/artist/detail/${id}`);
  }, []);

  return data ? (
    <Container>
      <Img src={data.image} alt={data.name} />
      <Info>
        <h1 onClick={() => onHandleClick(data.id)}>{data.name}</h1>
        <p>{primaryGenre.name}</p>
      </Info>
      <ContainerButton>
        <Button>Add</Button>
      </ContainerButton>
    </Container>
  ) : null;
}

export default React.memo(Card);
