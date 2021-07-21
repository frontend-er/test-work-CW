import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector, useDispatch } from "react-redux";
import { selectTagsItems } from "./../store/ducks/tags/selectors";
import { fetchTags } from "./../store/ducks/tags/actionCreators";

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
    width: 150,
    editable: true,
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


  const rows = items.map((item) => (createData(item.id ,item.sender, item.date, item.debit_amount, item.credit_amount, item.reciver )))






  // Используем хук чтобы отправить экшн на получение данных оот сервера и записываем всю информацию в стэйт
 React.useEffect(() => {
  dispatch(fetchTags())

}, [dispatch]);




  return (
    <div style={{ height: 400, width: '100%' }}>
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