import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from "react-redux";
import { selectTagsItems } from "./../store/ducks/tags/selectors";
import { fetchDate, fetchTags } from "./../store/ducks/tags/actionCreators";
import { useDemoData } from '@material-ui/x-grid-data-generator';
import TextField from '@material-ui/core/TextField';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import axios from "axios";
import { fetchDateRequest } from '../store/ducks/tags/sagas';
import { setTags } from "./../store/ducks/tags/actionCreators";



const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
    {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'data',
    headerName: 'Date',
    width: 250,
    editable: true,
    type: 'date',
  },

  {
    field: 'debitAmount',
    headerName: 'Debit amount',
    type: 'number',
    width: 250,
    editable: true,
  },
    {
    field: 'creditAmount',
    headerName: 'Credit amount',
    type: 'number',
    width: 250,
    editable: true,
  },
     {
    field: 'reciver',
    headerName: 'Reciver',
    type: 'number',
    width: 390,
    editable: true,
  },
 
];

function createData(id ,lastName, data, debitAmount, creditAmount, reciver) {
  return {id, lastName, data, debitAmount, creditAmount, reciver };
}






export default function DataGridDemo() {

  // Получаем массив данных от сервера 

  const items = useSelector(selectTagsItems);
  const dispatch = useDispatch();



  // Записываем данные в строки и в таблицу 


  const rows = items.map((item) => (createData(item.id ,item.sender,item.date, item.debit_amount, item.credit_amount, item.reciver )))



  // Используем хук чтобы отправить экшн на получение данных оот сервера и записываем всю информацию в стэйт
 React.useEffect(() => {
  dispatch(fetchTags())


}, [dispatch]);

//http://localhost:3001/transactions?date_lte=Thu%20Jun%2011%202020%2009:35:42%20GMT+0300%20(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&date_gte=Sat%20Jul%2005%202014%2018:39:49%20GMT+0400%20(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)
//http://localhost:3001/transactions?date_gte=Sun%20Jan%2018%202009%2012:26:42%20GMT+0300%20(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)&date_lte=Sun%20Jan%2018%202010%2012:26:42%20GMT+0300%20(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,%20%D1%81%D1%82%D0%B0%D0%BD%D0%B4%D0%B0%D1%80%D1%82%D0%BD%D0%BE%D0%B5%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F)

const [selectedDateFrom, setSelectedDateFrom] = React.useState(new Date('2014-08-18').toJSON().slice(0, 10));
const [selectedDateTo, setSelectedDateTo] = React.useState(new Date('2014-08-18').toJSON().slice(0, 10));


  const handleDateChangeDateFrom = (date) => {
    setSelectedDateFrom(date.toJSON().slice(0, 10));
    dispatch(fetchDate({selectedDateFrom,selectedDateTo }))


  };


    const handleDateChangeDateTo = (date) => {
    setSelectedDateTo(date.toJSON().slice(0, 10));
    dispatch(fetchDate({selectedDateFrom,selectedDateTo }))

  };
console.log(selectedDateTo);
console.log(selectedDateFrom);












  return (
    <div style={{ height: 400, width: '100%' }}>
      
        
       <div  styles={{padding:10}}>

          <MuiPickersUtilsProvider utils={DateFnsUtils}  >
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="From date"
          value={selectedDateFrom}
          onChange={handleDateChangeDateFrom}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
         <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="To date"
          value={selectedDateTo}
          onChange={handleDateChangeDateTo}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      
    
    </MuiPickersUtilsProvider>
       </div>


      <DataGrid
       filterModel={{
      items: [{ columnField: 'commodity', operatorValue: 'contains', value: 'rice' }],
      }}
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div> 
  );
}