import { FETCH_PROJECTS, NEW_PROJECT, DELETE_PROJECT } from './types';

export const fetchProjects = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(projects => dispatch({
		type: FETCH_PROJECTS,
		payload: projects
	}));
}

export const deleteProject = (id) => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts/1', {
	  method: 'DELETE'
	}).then(response => response.json())
	.then(res => dispatch({
		type: NEW_PROJECT
	}));
}

export const addProject = projectData => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
	    method: 'POST',
	    body: JSON.stringify(projectData),
	    headers: {
	      "Content-type": "application/json; charset=UTF-8"
	    }
	  })
	  .then(response => response.json())
	  .then(project => dispatch({
			type: NEW_PROJECT,
			payload: project
		}));
}