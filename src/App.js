import React, { Component } from 'react';
import uuid from 'uuid';
import './App.css';
import { Provider } from 'react-redux';

import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

import store from './store';

class App extends Component {

	handleAddProject(project) {
		let projects = this.state.projects;
		projects.push(project);
		this.setState({projects: projects});
	}

  render() {
    return (
    	<Provider store={store}>
	      <div className="App">
	        <AddProject addProject={this.handleAddProject.bind(this)} />
	        <Projects />
	      </div>
	     </Provider>
    );
  }
}

export default App;
