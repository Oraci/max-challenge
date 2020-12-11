import React, { useState, useContext, useCallback } from 'react';
import { ArtistsContext, Actions } from 'context/ArtistsContext';

import { Container, Button } from './styles';

function FavoriteButton({ data }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem('favorites')) || []
  );

  const { dispatch } = useContext(ArtistsContext);

  const onHandleRemoveClick = useCallback(() => {
    const currentList = JSON.parse(localStorage.getItem('favorites')) || [];

    const newList = currentList.filter((item) => item.id !== data.id);

    localStorage.setItem('favorites', JSON.stringify(newList));

    setFavorites(newList);
    dispatch({ type: Actions.SET_MY_LIST_FAVORITES, payload: newList });
  }, []);

  const onHandleAddClick = useCallback(() => {
    const currentList = JSON.parse(localStorage.getItem('favorites')) || [];

    const newList = [...currentList, data];

    localStorage.setItem('favorites', JSON.stringify(newList));

    setFavorites(newList);
    dispatch({ type: Actions.SET_MY_LIST_FAVORITES, payload: newList });
  }, []);

  return (
    <Container>
      {favorites.find((item) => data.id === item.id) ? (
        <Button onClick={onHandleRemoveClick}>Remove favorite</Button>
      ) : (
        <Button onClick={onHandleAddClick}>Add favorite</Button>
      )}
    </Container>
  );
}

export default React.memo(FavoriteButton);
