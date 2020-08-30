import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { DisplayMath} from "../config"
import moment from "moment"

export function InvSummary(props) {
    const {interestRate, interestPayout,maturityBy, maturityAmount} =props;
	return (
		<Grid container>
            <Grid item xs={12} sm={2} md={2} lg={12} xl={12}>
					<label>Investment Summary</label>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
					<label>Interest rate:</label>
                    <h3>12%</h3>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
					<label>Interest payout:</label>
                    <h3>{DisplayMath(12000)}</h3>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
					<label>Maturity by: </label>
                    <h3>{moment(Date.now()).format("MMMM DD")}</h3>
			</Grid>
			<Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
					<label>Maturiry amount:</label>
                    <h3>{DisplayMath(112000)}</h3>
			</Grid>
		</Grid>
	);
}
