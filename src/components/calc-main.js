import React, { useState } from 'react';
import { Container, Grid, Box, RadioGroup, FormControlLabel } from '@material-ui/core';
import { CommonSlider, RadioCommon } from '../modules';
import { INVMIN_MAX, INV_TENURE, INV_RATE, DisplayMath } from '../config';
import { InvSummary } from "./inv-summary"

export function CalcMain() {
	const [ invamount, setInvAmount ] = useState(INVMIN_MAX.min);
	const [ tenure, setTenure ] = useState(INV_TENURE.min);
	const [ applicableRate, setApplicableRate ] = useState(INV_RATE[0].value);
	// change event investment
	const onChangeInvestmentAmount = (value) => {
		setInvAmount(value);
	};

	//  change event tenure
	const onChangeTenure = (value) => {
		setTenure(value);
	};

	const onHandleCustomerTypeChange =(event)=>{
		setApplicableRate(event.target.value)
	}

	return (
		<Container maxWidth="sm">
			<Grid container>
				{/* Section 1 Investment amount and customer type */}
				<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
					<Box m={1}>
						<label>investment amount</label>
						<h2>₹ {DisplayMath(invamount)}</h2>
						<Box width="80%">
							<CommonSlider
								aria-label="invest-amount"
								min={INVMIN_MAX.min}
								max={INVMIN_MAX.max}
								onChange={(data, value) => onChangeInvestmentAmount(value)}
							/>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
				<Box m={1}>
					<label>customer type</label>
					<RadioGroup aria-label="applicableRate" name="rate" value={applicableRate} onChange={onHandleCustomerTypeChange}>
						{INV_RATE.map((data,index) => (
							<FormControlLabel
								id={`${index}-type`}
								value={data.value}
								control={<RadioCommon size="small" />}
								label={data.label}
								name={data.label}
							/>
						))}
					</RadioGroup>
					</Box>
				</Grid>

				{/* Section 2 Inv tenure * applicable intrest rate*/}
				<Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
					<Box m={1}>
						<label>investment tenure</label>
						<h2>{tenure} Months</h2>
						<Box width="80%">
							<CommonSlider
								aria-label="invest-amount"
								min={INV_TENURE.min}
								max={INV_TENURE.max}
								onChange={(data, value) => onChangeTenure(value)}
							/>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
				<Box m={1}>
					<label>applicable intrest rate</label>
					<h2>{applicableRate}%</h2>
				</Box>
				</Grid>
			</Grid>
			<InvSummary/>
		</Container>
	);
}
