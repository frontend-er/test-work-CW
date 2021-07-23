
import { FETCH_DATE, FETCH_TAGS, setTags} from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsAPI";
import { DateApi } from "./../../../services/api/dateApi";


//Сага занимается отлавливанием асинхронных экшинов, понимает что надо выполнить какую то логику а потом дипатчить экшн


export function* fetchTagsRequest() {
   try {
      const items = yield call(TagsApi.fetchTags);
      yield put(setTags(items))
   } catch (error) {
      console.log(error);
   }
}



export function* fetchDateRequest(payload) {
   try {
      const items = yield call(DateApi.fetchDate, payload.payload.selectedDateFrom , payload.payload.selectedDateTo);
      debugger;
      yield put(setTags(items))
   } catch (error) {
      console.log(error);
   }
}


export function* dateSaga() {
   yield takeLatest(FETCH_DATE, fetchDateRequest);
}


export function* tagsSaga() {
   yield takeLatest(FETCH_TAGS, fetchTagsRequest);
}
