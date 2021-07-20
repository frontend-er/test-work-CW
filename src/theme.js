

import {
	createTheme
} from '@material-ui/core/styles'
import {
	red
} from '@material-ui/core/colors';


export const theme = createTheme({
	typography: {
		fontFamily: [
			'system-ui',
			'-apple-system',
			'BlinkMacSystemFont',
			'Segoe UI',
			'Roboto',
			'Ubuntu',
			'Helvetica Neue',
			'sans-serif',
		],
	},
	palette: {
		primary: {
			main: 'rgb(29, 161, 242)',
			dark: 'rgb(26, 145, 218)',
			contrastText: '#fff',
		},
		secondary: {
			main: 'rgb(26, 145, 218)',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		text: {
			primary: '#14171a',
		},

	}
	
});

export default theme;