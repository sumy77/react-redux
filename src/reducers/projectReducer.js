import { FETCH_PROJECTS, NEW_PROJECT, DELETE_PROJECT } from '../actions/types';

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'FETCH_PROJECTS':
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
		case 'DELETE_PROJECT':
			return {
				...state
			}
		break;
		default:
			return state;
	}
}