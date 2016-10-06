import React from 'react';
import { Link } from 'react-router';
import HomeContainer from './home/home_container';
import DeckIndexContainer from './deck/deck_index_container';

const Frontpage = ({children}) => {
  return (
    <div>
      <HomeContainer/>
      {children}
    </div>
  );
};

export default Frontpage;
