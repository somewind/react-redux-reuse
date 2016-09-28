import React, { Component } from 'react'
import {bindActionCreators, connect} from 'react-redux-reuse'

import Counter from './components/Counter'
import * as actions from './actions'

class App extends Component {
  render() {
    const {count, actions} = this.props
    return (
      <Counter onIncrement={actions.onIncrement} onDecrement={actions.onDecrement} value={count}/>
    )
  }
}

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
