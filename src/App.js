import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import { Provider } from 'react-redux';

import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import store from './store';

class App extends Component {

  render() {
    return (
    	<Provider store={store}>
	      <div className="App">
	        <AddProject />
	        <Projects />
	      </div>
	     </Provider>
    );
  }
}

export default App;
