import React from 'react';
import './index.css';
import './App.css';
import Profile from './Profile';
import Highlight from  './Highlight';
import Hi from './Hi';
import Table from './Table';

function App() {
  return (
    <div className='container' id='container'>
      <Profile />
      <Hi />
      <Highlight />
      <Table />
    </div>
  )
}

export default App;
