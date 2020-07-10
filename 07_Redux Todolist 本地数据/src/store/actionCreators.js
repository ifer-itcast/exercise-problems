import { CHANGE_INPUT, ADD_ITEM, MODIFY_ITEM,DELETE_ITEM } from './actionTypes';
export const inputChangeAction = e => ({
	type: CHANGE_INPUT,
	value: e.target.value
});

export const inputKeyUpAction = value => ({
	type: ADD_ITEM,
	title: value,
	completed: false,
	id: (+new Date()).toString()
});

export const checkboxChangeAction = e => ({
	type: MODIFY_ITEM,
	completed: e.target.checked,
	id: e.target.dataset.id
});

export const btnClickAction = e => ({
    type: DELETE_ITEM,
    id: e.target.dataset.id
});