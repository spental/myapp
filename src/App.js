import React from 'react';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import Header from './components/Header';


import './App.css';

function App() {
  return (
    <div class="padding">
      <div className="App">
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
     </div>
    </div>
    
  );
}

export default App;
