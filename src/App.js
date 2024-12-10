
import React from 'react';
import Log from './login/Log';
import Register from './login/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FindId from './login/FindId';
import FindPw from './login/FindPw';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Log />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>


      {/* <FindId/> */}
      {/* <FindPw/> */}

      <BrowserRouter>
        <Routes>
          <Route path='/findId' element={<FindId />} />
          <Route path='/findPw' element={<FindPw />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
