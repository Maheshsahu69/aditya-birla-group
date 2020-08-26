import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage';
import SongList from './components/SongList';

function App() {
  return (
    <div className="App">
      <h3>Media Apps</h3>
      <BrowserRouter>
      <div>
        <Route path="/" exact component={LoginPage} />
        <Route path="/songlist" component={SongList} />
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
