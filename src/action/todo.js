
// action type
const ADD_TODO = 'ADD_TODO'
const COMPLETE_TODO = 'COMPLETE_TODO'

// action creators
function addTodo(text) {
	return { type: ADD_TODO,  text};
}

function addTodo2(text) {
	console.log('addTodo2')
  return (dispatch) => {
		console.log('addTodo2 dispatch', dispatch)
	return fetch("api/add.json").then(
		res => res.json().then(data => dispatch(addTodo(data.status)))
	);
  };
}


function complete({complete, id}) {
	return { type: COMPLETE_TODO,  complete, id};
}

function complete2(data2) {
  return (dispatch) => {
	return fetch("api/add.json").then(
		res => res.json().then(data => dispatch(complete(data2)))
	);
  };
}

export  {
	ADD_TODO,
	COMPLETE_TODO,
	addTodo,
	addTodo2,
    complete,
    complete2
}

