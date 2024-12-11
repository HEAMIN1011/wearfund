import React from 'react';
import MainSlide from './MainSlide/MainSlide';
import Bestfunding from './MainBest/Bestfunding';
import MainVideoComponent from './MainVideo/MainVideoComponent';


function Mainbody() {
  return (
    <main style={{ flex: 1 }}>
      <MainSlide />
      <Bestfunding />
      <MainVideoComponent />

    </main>
  );
}

export default Mainbody;
