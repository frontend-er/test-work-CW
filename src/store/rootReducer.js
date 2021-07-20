import { combineReducers } from "redux";
import { tagsReducer } from "./ducks/tags/reducers";



export const rootReducer = combineReducers({
   tags: tagsReducer,
})