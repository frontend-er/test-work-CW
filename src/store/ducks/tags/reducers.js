import produce from 'immer';
import { FETCH_TAGS, SET_TAGS } from './actionCreators';


const initialTagsState = {
   items: [],
}

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