import React from 'react';
import './index.css';
import './App.css';
import Profile from './Profile';
import Highlight from  './Highlight';
import Hi from './Hi';
import Bubble1 from './Bubble1';
import Bubble2 from './Bubble2';
import Bubble3 from './Bubble3';

function App() {
  return (
    <div className='container' id='container'>
      <Profile />
      <Hi />
      <Highlight />
    </div>
  )
}

export default App;
