import React, { Component } from 'react';
import Provider from './../context/Provider';
import { LanguageConsumer } from './../context/LanguageContext';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          
        </div>
      </Provider>
    );
  }
}

export default App;
