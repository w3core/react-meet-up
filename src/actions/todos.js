export const TODO_ADD = 'TODO_ADD';
export const TODO_TOGGLE = 'TODO_TOGGLE';
export const TODO_DELETE = 'TODO_DELETE';

export const todoAdd = text => ({
	type: TODO_ADD,
	text
});

export const todoToggle = uid => ({
	type: TODO_TOGGLE,
	uid
});

export const todoDelete = uid => ({
	type: TODO_DELETE,
	uid
});
