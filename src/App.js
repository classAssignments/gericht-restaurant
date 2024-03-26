import React from 'react';

import { AboutUs, FindUs, Footer, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Laurels />
    <FindUs />
    <Footer />
  </div>
);

export default App;
