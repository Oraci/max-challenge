import React, { createContext, useReducer } from 'react';

const ArtistsContext = createContext();

const Actions = {
  SET_ARTISTS_LIST: 'SET_ARTISTS_LIST',
  SET_SELECTED_OPTION: 'SET_SELECTED_OPTION',
  SET_SELECTED_ARTIST: 'SET_SELECTED_ARTIST',
};

const initialState = {
  artists: [],
  selectedOption: '',
  selectedArtist: {},
};

function reducer(state, action) {
  switch (action.type) {
    case Actions.SET_ARTISTS_LIST: {
      return { ...state, artists: action.payload };
    }
    case Actions.SET_SELECTED_OPTION: {
      return { ...state, selectedOption: action.payload };
    }
    case Actions.SET_SELECTED_ARTIST: {
      return { ...state, selectedArtist: action.payload };
    }
    default: {
      return state;
    }
  }
}

const ArtistsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ArtistsContext.Provider value={{ state, dispatch }}>
      {children}
    </ArtistsContext.Provider>
  );
};

export { ArtistsProvider, ArtistsContext, Actions };
