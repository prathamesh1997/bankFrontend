import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { DisplayMath } from '../config';
import moment from 'moment';

export function InvSummary(props) {
	const { interestRate, interestPayout, maturityBy, maturityAmount } = props;
	return (
		<Grid container>
			<Grid item xs={12} sm={2} md={2} lg={12} xl={12}>
				<Box className="mt-1">
					<label className="dark heads">Investment Summary</label>
				</Box>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
				<Box width="90%" className="mt-1h">
					<label className="light">Interest rate:</label>
					<h1 className="label  summary-title">{interestRate}%</h1>
				</Box>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
				<Box width="90%" className="mt-1h">
					<label className="light">Interest payout:</label>
					<h1 className="label  summary-title">{DisplayMath(interestPayout)}</h1>
				</Box>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
				<Box width="90%" className="mt-1h">
					<label className="light">Maturity by: </label>
					<h1 className="label  summary-title"> {moment(maturityBy).format('MMM YYYY')}</h1>
				</Box>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
				<Box  className="mt-1h border-last">
					<label className="light">Maturity amount:</label>
					<h1 className="label  summary-title"> {DisplayMath(maturityAmount)}</h1>
				</Box>
			</Grid>
		</Grid>
	);
}
