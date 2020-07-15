import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth48955Reducer from '../features/EmailAuth48955/redux/reducers';
import CalendarView58954Reducer from '../features/CalendarView58954/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth48955: EmailAuth48955Reducer,
CalendarView58954: CalendarView58954Reducer,

});