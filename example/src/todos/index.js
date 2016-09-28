import {bindActionCreators, connect} from 'react-redux-reuse'
import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import * as actions from './actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const App = ({actions, todos, filter}) => (
  <div>
    <AddTodo actions={actions} />
    <TodoList todos={getVisibleTodos(todos, filter)} onTodoClick={id => actions.toggleTodo(id)} />
    <Footer filter={filter} actions={actions}/>
  </div>
)

export default connect(actions)(App);

// Advanced Usage:

// function mapStateToProps(options, state) {
//   return {
//     ...state[options.name],
//     otherCombineState,
//   };
// }
//
// function mapActionToProps(options, dispatch, getState) {
//   return {actions: bindActionCreators(options, {...actions, otherCombineAction}, dispatch)};
// }
//
// export default connect(mapStateToProps, mapActionToProps)(App);
