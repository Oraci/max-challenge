import React, { useContext, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import ArtistCard from 'components/ArtistCard';
import BackButton from 'components/BackButton';

import { ArtistsContext, Actions } from 'context/ArtistsContext';

import { Container, Content, Header, ContainerArtists, Title } from './styles';

function Favorites() {
  const { state, dispatch } = useContext(ArtistsContext);
  const { favorites } = state;

  const history = useHistory();

  const onBackClick = () => {
    history.goBack();
  };

  const onHandleTitleClick = useCallback((data) => {
    dispatch({ type: Actions.SET_SELECTED_ARTIST, payload: data });

    history.push(`/artist/detail/${data?.id}`);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <BackButton onBackClick={onBackClick} />
        </Header>
        <Title>My list</Title>

        {favorites.length > 0 ? (
          <ContainerArtists>
            {favorites.map((artist) => (
              <ArtistCard
                key={artist.id}
                data={artist}
                onHandleTitleClick={() => onHandleTitleClick(artist)}
              />
            ))}
          </ContainerArtists>
        ) : (
          <p>No artists in list</p>
        )}
      </Content>
    </Container>
  );
}

export default Favorites;
