import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';

import MyLinkList from 'components/MyLinkList';

import { BackToButton, BackTo } from './styles';

function BackButton({ onBackClick }) {
  return (
    <BackToButton>
      <BackTo onClick={onBackClick}>
        <MdKeyboardBackspace size={24} style={{ marginRight: 6 }} />
        <p>Back to search</p>
      </BackTo>
      <MyLinkList />
    </BackToButton>
  );
}

export default BackButton;
