import axios from "axios";



 export const DateApi = {
   fetchDate(selectedDateFrom,selectedDateTo ) {
      return axios.get(`http://localhost:3001/transactions?date_gte=${selectedDateFrom}&date_lte=${selectedDateTo}`).then(({ data }) =>   data);
   }

}