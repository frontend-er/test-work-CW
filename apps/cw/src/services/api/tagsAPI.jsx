import axios from "axios";



export const TagsApi = {
   fetchTags() {
      return axios.get('http://localhost:3001/transactions').then(({ data }) =>   data);
   }

}