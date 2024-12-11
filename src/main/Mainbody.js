import React from 'react';
import MainSlide from './MainSlide/MainSlide';
import Bestfunding from './MainBest/Bestfunding';



function Mainbody() {
  return (
    <main style={{ flex: 1 }}>
      <MainSlide />
      <Bestfunding />

    </main>
  );
}

export default Mainbody;
