import React from 'react';
import { Link } from 'react-router';
import HomeContainer from './home/home_container';
import DeckIndexContainer from './deck/deck_index_container';

const Frontpage = () => {
  return (
    <div>
      <HomeContainer/>
      <DeckIndexContainer/>
    </div>
  );
};

export default Frontpage;
