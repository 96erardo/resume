import React, { Component } from 'react';
import Provider from './../context/Provider';
import Resume from './page/Resume';
import './../assets/css/app.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Resume className="my-5" />
              </div>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
