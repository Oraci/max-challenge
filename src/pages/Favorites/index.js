import React, { useState, useContext, useCallback, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import firebase from 'services/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import ArtistCard from 'components/ArtistCard';
import BackButton from 'components/BackButton';

import { ArtistsContext, Actions } from 'context/ArtistsContext';

import { Container, Content, Header, ContainerArtists, Title } from './styles';

function Favorites() {
  const ref = firebase.firestore().doc(`users/teste@gmail.com`);
  const [data, setData] = useState([]);
  const [userData, loading] = useDocumentData(ref);
  const favorites = userData?.favorites || [];

  const { dispatch } = useContext(ArtistsContext);

  const history = useHistory();

  useEffect(() => {
    const getFavorites = async () => {
      const promises = favorites.map((item) =>
        axios
          .get(`/api/v1/music/artists/${item}`)
          .then((response) => response?.data?.data[0])
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log(error);
          })
      );

      Promise.all(promises).then((values) => {
        setData(values);
      });
    };

    getFavorites();
  }, [favorites]);

  const onBackClick = () => {
    history.goBack();
  };

  const onHandleTitleClick = useCallback((payload) => {
    dispatch({ type: Actions.SET_SELECTED_ARTIST, payload });

    history.push(`/artist/detail/${payload?.id}`);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <BackButton onBackClick={onBackClick} />
        </Header>
        <Title>My list</Title>

        {data.length > 0 ? (
          <ContainerArtists>
            {data.map((artist) => (
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
