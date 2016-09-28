let nextTodoId = 0

export function addTodo(text) {
  return options => (dispatch, getState) =>{
    //do some network stuff
    let todos = getState()[options.name].todos;
    todos.push({
      id: nextTodoId++,
      text,
      completed: false,
    });
    dispatch({
      type: 'ADD_TODO',
      [options.name]:{
        todos:[...todos]
      }
    });
  }
}

export function setVisibilityFilter(filter) {
  return options => {
    return {
      type: 'SET_VISIBILITY_FILTER',
      [options.name]:{
        filter,
      }
    }
  };
}

export function toggleTodo(id) {
  return options => (dispatch, getState) =>{
    //do some network stuff
    let todos = getState()[options.name].todos;
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id == id){
        todos[i].completed = !todos[i].completed;
        break;
      }
    }
    dispatch({
      type: 'TOGGLE_TODO',
      [options.name]:{
        todos
      }
    });
  }
}
