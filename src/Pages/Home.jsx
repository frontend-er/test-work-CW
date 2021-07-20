import React from 'react';
import { makeStyles} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import EnhancedTable from "./../components/DataTable";
import { useDispatch, useSelector } from "react-redux";
import { selectTagsItems } from "./../store/ducks/tags/selectors";


export const useStylesSignIn = makeStyles((theme) => ({
   wrapper: {
      display: 'flex',
   },

}));


export const Home = (props) => {
const classes = useStylesSignIn();


  const items = useSelector(selectTagsItems);
  const dispatch = useDispatch();


	const credit =	items.map( item => (item.credit_amount));
	let creditSum = 0;
	for (let i = 0; i< credit.length; i++) {
		creditSum += credit[i];
	}


	console.log(creditSum);

	const debit =	items.map( item => (item.debit_amount));
	let debittSum = 0;
	for (let i = 0; i< debit.length; i++) {
		debittSum += debit[i];
	}		
	console.log(debittSum);


	const totalMoneyToRecive = debittSum + creditSum;

   return ( <div>

      <div className={classes.wrapper}>
			<Grid xs={12} sm={4} className={classes.columnGrid}>

			</Grid>
         <Grid item xs={12} sm={6} className={classes.columnGrid}>
				<Box position="relative" display="inline-flex">
      			<CircularProgress variant="determinate" value={(debittSum * 100 )/ totalMoneyToRecive}  style={{width: 240, height: 240, margin: 30}} />
      			<Box
        				top={0}
        				left={0}
        				bottom={0}
        				right={0}
        				position="absolute"
        				display="flex"
        				alignItems="center"
        				justifyContent="center"
      			>
        				<Typography variant="caption" component="div" color="textSecondary">Total Debit Amount<div> {debittSum}</div> </Typography>
      			</Box>
    			</Box>
				 <Box position="relative" display="inline-flex">
      			<CircularProgress variant="determinate" value={(creditSum * 100 )/ totalMoneyToRecive}  style={{width: 240, height: 240, margin: 30}} />
      			<Box
        				top={0}
        				left={0}
        				bottom={0}
        				right={0}
        				position="absolute"
        				display="flex"
        				alignItems="center"
        				justifyContent="center"
      			>
        				<Typography variant="caption" component="div" color="textSecondary">Total Credit Amount <div> {creditSum}</div></Typography>
      			</Box>
    			</Box>
			</Grid>
			
			<Grid xs={12} sm={2} className={classes.columnGrid}>

				
			</Grid>


			
      </div>

			<section>
				<EnhancedTable/>
			</section>

	</div>

   );
}
