import { tagsSaga } from "./ducks/tags/sagas";
import { all } from "redux-saga/effects";


export default function* rootSaga() {
   yield all([
      tagsSaga(),
   ])
}