import React, { Component } from 'react';
import Provider from './../context/Provider';
import Resume from './page/Resume';
import RoundSelector from './organisms/RoundSelector';
import { LanguageConsumer } from './../context/LanguageContext';

import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';

import './../assets/css/app.css';

library.add(faGlobe);

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
          <LanguageConsumer>
            {value => (
              <RoundSelector
                face="globe"
                items={value.langs}
                handleClick={value.dispatch}
              />
            )}
          </LanguageConsumer>
        </div>
      </Provider>
    );
  }
}

export default App;
