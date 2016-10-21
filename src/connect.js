/**
 * Created by maoshuchen on 9/28/2016.
 */
import {connect} from 'react-redux'
import bindActionCreators from './bindActionCreators'

export default function connectReuse(actions, mapAction) {
  return reactClass => {
    return options => {
      let mapState = actions;
      if(typeof actions == 'object'){
        mapState = (state) =>{
          return {...state[options.name], options};
        };
        mapAction = (dispatch, getState) =>{
          return {actions: bindActionCreators(options, {...actions}, dispatch)};
        };
      } else if(typeof actions == 'function'){
        mapState = actions.bind(this, options);
        mapAction = mapAction.bind(this, options);
      }

      return connect(mapState, mapAction)(reactClass);
    }
  }
}
