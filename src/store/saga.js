import { tagsSaga } from "./ducks/tags/sagas";
import { all } from "redux-saga/effects";

// Создаем главную сагу которая следит за всеми сагами 

export default function* rootSaga() {
   yield all([
      tagsSaga(),
   ])
}