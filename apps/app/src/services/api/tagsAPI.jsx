import axios from "axios";



export const TagsApi = {
   fetchTags() {
      return axios.get('http://localhost:3333/api').then(({ data }) =>   data);
   }

}