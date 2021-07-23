import { combineReducers } from "redux";
import { tagsReducer } from "./ducks/tags/reducers";


// Создаем главнй редюсер со страницами который ообьединяет все осталльные редюсеры


export const rootReducer = combineReducers({
   tags: tagsReducer,
})