import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useHistory } from 'react-router-dom';

import ArtistCard from 'components/ArtistCard';
import DetailCard from 'components/DetailCard';

import { ArtistsContext, Actions } from 'context/ArtistsContext';

import theme from 'theme/theme-styled';

import {
  Container,
  Content,
  Header,
  BackToButton,
  BackTo,
  ContainerArtists,
} from './styles';

function Detail() {
  const [similarArtists, setSimilarArtists] = useState([]);

  const { state, dispatch } = useContext(ArtistsContext);
  const { selectedArtist } = state;

  const history = useHistory();

  useEffect(() => {
    const getSimilarArtists = async () => {
      const { id } = selectedArtist;

      return axios
        .get(`/api/v1/music/artists/${id}/similar`)
        .then((response) => {
          setSimilarArtists(response?.data?.data);
        })
        .catch((error) => console.log(error));
    };

    getSimilarArtists();
  }, []);

  const onClickBack = () => {
    history.push('/');
  };

  return (
    <Container>
      <Content>
        <Header>
          <BackToButton>
            <BackTo onClick={onClickBack}>
              <MdKeyboardBackspace size={24} style={{ marginRight: 6 }} />
              <p>Back to search</p>
            </BackTo>
          </BackToButton>
        </Header>
        {selectedArtist && <DetailCard data={selectedArtist} />}

        {similarArtists.length > 0 && (
          <ContainerArtists>
            <h3>Related Artists:</h3>
            {similarArtists.map((artist) => (
              <ArtistCard key={artist.id} data={artist} />
            ))}
          </ContainerArtists>
        )}
      </Content>
    </Container>
  );
}

export default Detail;
