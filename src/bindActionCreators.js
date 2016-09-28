/**
 * Created by maoshuchen on 9/28/2016.
 */
function bindActionCreator(options, actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(...args)(options))
}

export default function bindActionCreators(options, actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(options, actionCreators, dispatch)
  }

  if(!options){
    throw new Error(
      `bindActionCreators expected a options, instead received ${options === null ? 'null' : typeof options}. `
    )
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error(
      `bindReuseActionCreators expected an object or a function, instead received ${actionCreators === null ? 'null' : typeof actionCreators}. ` +
      `Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`
    )
  }

  var keys = Object.keys(actionCreators)
  var boundActionCreators = {}
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    var actionCreator = actionCreators[key]
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(options, actionCreator, dispatch)
    }
  }
  return boundActionCreators
}
