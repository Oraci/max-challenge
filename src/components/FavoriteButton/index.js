import React, { useState, useContext, useCallback } from 'react';
import firebase from 'services/firebase';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { Container, Button } from './styles';

function FavoriteButton({ data }) {
  const ref = firebase.firestore().doc(`users/teste@gmail.com`);

  const [userData, loading] = useDocumentData(ref);
  const favorites = userData?.favorites || [];

  const onHandleRemoveClick = useCallback(() => {
    const newList = favorites.filter((item) => item !== data.id);

    ref.set({ favorites: newList }, { merge: true });
  }, [favorites]);

  const onHandleAddClick = useCallback(() => {
    const newList = [...favorites, data.id];

    ref.set({ favorites: newList }, { merge: true });
  }, [favorites]);

  return (
    <Container>
      {favorites.find((item) => data.id === item) ? (
        <Button onClick={onHandleRemoveClick}>Remove favorite</Button>
      ) : (
        <Button onClick={onHandleAddClick}>Add favorite</Button>
      )}
    </Container>
  );
}

export default React.memo(FavoriteButton);
