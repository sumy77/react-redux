import { FETCH_PROJECTS, NEW_PROJECT, DELETE_PROJECT } from '../actions/types';

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'FETCH_PROJECTS':
		case 'DELETE_PROJECT':
			return {
				...state,
				items: action.payload
			}
		break;
		case 'NEW_PROJECT':
			return {
				...state,
				item: action.payload
			}
		break;
		default:
			return state;
	}
}