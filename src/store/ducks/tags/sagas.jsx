
import { FETCH_TAGS, setTags} from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { TagsApi } from "../../../services/api/tagsAPI";


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
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
