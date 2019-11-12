import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const getPasswords = () => {
    console.log("getPasswords function");
    fetch('/trial')
      .then((res) => {
        return res.text()
      .then(textResponse => {console.log(textResponse);});
    }
  )}

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
