import React, { useEffect, useCallback, useContext } from 'react';
import AsyncSelect from 'react-select/async';
import axios from 'axios';
import debounce from 'lodash.debounce';

import Header from 'components/Header';
import ArtistCard from 'components/ArtistCard';

import { ArtistsContext, Actions } from 'context/ArtistsContext';

import { Container, ContainerSearch, ContainerArtists } from './styles';

function Home() {
  const { state, dispatch } = useContext(ArtistsContext);
  const { artists, selectedOption } = state || {};

  const getArtists = async () => {
    const { value } = selectedOption;
    return axios
      .get(`/api/v1/music/genres/${value}/artists`)
      .then((response) => {
        dispatch({
          type: Actions.SET_ARTISTS_LIST,
          payload: response?.data?.data,
        });
      })
      .catch((error) => console.log(error));
  };

  const getGenres = async (value) => {
    let options = [];
    const params = { q: value };

    if (!value) {
      return options;
    }

    return axios
      .get('/api/v1/music/genres', { params })
      .then((response) => {
        options = response?.data?.data?.map((genre) => ({
          value: genre.id,
          label: genre.name,
        }));

        return options;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadSuggestedOptions = useCallback(
    debounce((value, callback) => {
      getGenres(value).then((options) => {
        callback(options);
      });
    }, 500),
    []
  );

  useEffect(() => {
    if (selectedOption) {
      getArtists();
    } else {
      // dispatch({
      //   type: Types.SET_ARTISTS_LIST,
      //   payload: [],
      // });
    }
  }, [selectedOption]);

  return (
    <Container>
      <Header />
      <ContainerSearch>
        <p>Enter a genre to find artists:</p>
        <AsyncSelect
          value={selectedOption}
          loadOptions={loadSuggestedOptions}
          cacheOptions
          defaultOptions
          isClearable
          onChange={(option) =>
            dispatch({
              type: Actions.SET_SELECTED_OPTION,
              payload: option,
            })
          }
        />
      </ContainerSearch>

      {artists.length > 0 && (
        <ContainerArtists>
          {artists.map((artist) => (
            <ArtistCard key={artist.id} data={artist} />
          ))}
        </ContainerArtists>
      )}
    </Container>
  );
}

export default Home;
