/**
 * Created by maoshuchen on 9/28/2016.
 */
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {equipSword} from 'redux-sword'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

import CounterAppCreator from './counter'
import counterReducers from './counter/reducers'

import TodosAppCreator from './todos'
import todosReducers from './todos/reducers'

const reducers = combineReducers(equipSword({
  counterApp: counterReducers,
  todosApp: todosReducers
}));

const store = compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f )(createStore)(reducers);

const AppCounter = CounterAppCreator({
  name: 'counterApp'
});

const AppTodos = TodosAppCreator({
  name: 'todosApp'
});

render(
  <Provider store={store}>
    <div>
      <AppCounter />
      <AppTodos />
    </div>
  </Provider>,
  document.getElementById('root')
)
