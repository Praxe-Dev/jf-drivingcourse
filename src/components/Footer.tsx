import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

function Footer() {
	return (
		<Container maxWidth={false} disableGutters
		>
			<Grid
				container
				justifyContent='normal'
			>
				<Grid item xs={6} sx={{paddingTop: 5, paddingBottom: 5, backgroundColor: 'lightgrey'}}>
					<p style={{marginLeft: 40}}>Copyright Jean-François VERBRACKEN 2022. Tous droits réservés.</p>
				</Grid>
				<Grid item xs={6} sx={{paddingTop: 5, paddingBottom: 5, color: 'white', backgroundColor: '#085aa5'}}>
					<p style={{marginLeft: 40}}>Copyright Jean-François VERBRACKEN 2022. Tous droits réservés.</p>
				</Grid>
			</Grid>
			
		</Container>
	)
}

export default Footer