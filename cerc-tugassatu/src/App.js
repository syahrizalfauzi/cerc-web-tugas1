import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hai! Aku Rizal, klik link di bawah untuk akses repo GitHub-nya ya! :D
        </p>
        <a
          className="App-link"
          href="https://github.com/syahrizalfauzi/cerc-web-tugas1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klik disini!
        </a>
      </header>
    </div>
  );
}

export default App;
