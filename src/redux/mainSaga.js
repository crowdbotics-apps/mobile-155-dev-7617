import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth48955Saga from '../features/EmailAuth48955/redux/sagas';
import CalendarView58954Saga from '../features/CalendarView58954/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth48955Saga,
CalendarView58954Saga,
    
  ]);
}