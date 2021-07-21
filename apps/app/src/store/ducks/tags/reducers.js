import produce from 'immer';
import { FETCH_TAGS, SET_TAGS } from './actionCreators';

// Используем библиотеку immer которая за нас копирует все что есть в старом масиве и создает новый, что говорит о том что реакт долежн перерендериться
// Изначальный стэйт => пустоой масив обьектов
const initialTagsState = {
   items: [],
}


// Reducer который обрабатывает экшн которыев него прихходыт

export const tagsReducer = produce((daraft, action) => {
   switch (action.type) {
      case SET_TAGS:
         daraft.items = action.payload;
         break;

      case FETCH_TAGS:
         daraft.items = [];
         break;

    

      default:
         return;
   }



}, initialTagsState)