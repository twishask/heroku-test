import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getPasswords = () => {
    console.log("getPasswords function");
    // Get the passwords and store them in state
    fetch('/trial')
      .then(res => res.json())
      .then(passwords => {console.log("passwords"+passwords);});
  }

  return (
    <div className="App">
      Hello React lovers
      <br></br>
      Heroku+git test again
      <button
              className="more"
              onClick={getPasswords}>
              Get More
            </button>
    </div>
  );
}

export default App;
