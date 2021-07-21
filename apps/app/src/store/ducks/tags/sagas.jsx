
import { FETCH_TAGS, setTags} from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsAPI";


//Сага занимается отлавливанием асинхронных экшинов, понимает что надо выполнить какую то логику а потом дипатчить экшн


export function* fetchTagsRequest() {
   try {
      const items = yield call(TagsApi.fetchTags);
      yield put(setTags(items))
   } catch (error) {
      console.log(error);
   }
}


export function* tagsSaga() {
   yield takeLatest(FETCH_TAGS, fetchTagsRequest);
}
