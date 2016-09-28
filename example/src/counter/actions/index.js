/**
 * Created by maoshuchen on 9/28/2016.
 */

export function onIncrement() {
  return options => (dispatch, getState) =>{
    //do some network stuff.
    dispatch({
      type: 'INCREMENT',
      [options.name]: {
        count: getState()[options.name].count + 1
      },
    })
  }
}

export function onDecrement() {
  return options => (dispatch, getState) =>{
    //do some network stuff.
    dispatch({
      type: 'DECREMENT',
      [options.name]: {
        count: getState()[options.name].count - 1
      },
    })
  }
}
