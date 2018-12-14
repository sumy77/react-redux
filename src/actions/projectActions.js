import { FETCH_PROJECTS, NEW_PROJECT, DELETE_PROJECT } from './types';

export const fetchProjects = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then(response => response.json())
	.then(projects => dispatch({
		type: FETCH_PROJECTS,
		payload: projects
	}));
}

export const deleteProject = (projects, id) => dispatch => {
	let index = projects.findIndex(x => x.id === id);
	if(index >= 0) {
    	projects.splice(index, 1);
    }
	dispatch({
    	type: DELETE_PROJECT,
    	payload: projects
    });
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