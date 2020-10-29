import React from 'react';
import './style.scss';
import Header from './components/Header';
import Main from './components/main/main';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
  <>
      <BrowserRouter>
      <Header/>
        <Main />
        <Footer />
      </BrowserRouter>
    </>
    </>
);
}

export default App;