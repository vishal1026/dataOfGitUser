import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store.js';
import MainComponent from './MainComponent';

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <MainComponent/>
      </Provider>
    );
  }
}

export default App;