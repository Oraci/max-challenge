import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ArtistsContext, Actions } from 'context/ArtistsContext';

import ArtistCard from 'components/ArtistCard';
import DetailCard from 'components/DetailCard';
import BackButton from 'components/BackButton';

import { Container, Content, Header, ContainerArtists } from './styles';

function Detail() {
  const [similarArtists, setSimilarArtists] = useState([]);

  const { state, dispatch } = useContext(ArtistsContext);
  const { selectedArtist } = state;

  const history = useHistory();

  const getSimilarArtists = async () => {
    const { id } = selectedArtist;

    return axios
      .get(`/api/v1/music/artists/${id}/similar`)
      .then((response) => {
        setSimilarArtists(response?.data?.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSimilarArtists();
  }, []);

  useEffect(() => {
    getSimilarArtists();
  }, [selectedArtist]);

  const onBackClick = useCallback(() => {
    history.push('/');
  }, []);

  const onHandleTitleClick = useCallback((data) => {
    dispatch({ type: Actions.SET_SELECTED_ARTIST, payload: data });

    history.push(`/artist/detail/${data?.id}`);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <BackButton onBackClick={onBackClick} />
        </Header>
        {selectedArtist && <DetailCard data={selectedArtist} />}

        {similarArtists.length > 0 ? (
          <ContainerArtists>
            <h3>Related Artists:</h3>
            {similarArtists.map((artist) => (
              <ArtistCard
                key={artist.id}
                data={artist}
                onHandleTitleClick={() => onHandleTitleClick(artist)}
              />
            ))}
          </ContainerArtists>
        ) : (
          <p>Detail artist not found</p>
        )}
      </Content>
    </Container>
  );
}

export default Detail;
