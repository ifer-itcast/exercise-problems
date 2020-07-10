import { CHANGE_INPUT, ADD_ITEM, MODIFY_ITEM, DELETE_ITEM } from './actionTypes';

const defaultState = {
	inputValue: '',
	list: []
};

const reducer = (state = defaultState, action) => {
	const newState = JSON.parse(JSON.stringify(state));
	const idx = newState.list.findIndex(item => item.id === action.id);
	switch (action.type) {
		case CHANGE_INPUT:
			newState.inputValue = action.value;
			return newState;
		case ADD_ITEM:
			newState.list.unshift({
				title: action.title,
				completed: action.completed,
				id: action.id
			});
			newState.inputValue = '';
			return newState;
		case MODIFY_ITEM:
			newState.list[idx].completed = action.completed;
			return newState;
		case DELETE_ITEM:
			newState.list.splice(idx, 1);
			return newState;
		default:
			return state;
	}
};
export default reducer;
