import React from 'react';
import Navbar from './components/Navbar'
import './App.scss';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div>
      <Navbar /> 
      <Header />
      {/* <div className="divider"></div> */}
      <Content />
    </div>
  );
}

export default App;
