

  export  const  SET_TAGS = 'tags/SET_TAGS';
  export  const  FETCH_TAGS = 'tags/FETCH_TAGS';
  export const SET_TAGS_LOADING_STATE = 'tags/SET_TAGS_LOADING_STATE';





export const setTags = (payload) => ({
   type: SET_TAGS,
   payload,
});

export const fetchTags = () => ({
   type:FETCH_TAGS,
});



export const setTagsLoadingState = (payload) => ({
   type: SET_TAGS_LOADING_STATE,
   payload,

});


