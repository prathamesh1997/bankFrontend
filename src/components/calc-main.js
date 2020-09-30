import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, RadioGroup, FormControlLabel } from '@material-ui/core';
import { CommonSlider, RadioCommon, FdFormula, ConfirmBtn, Snackbar } from '../modules';
import { INVMIN_MAX, INV_TENURE, INV_RATE, DisplayMath } from '../config';
import { InvSummary } from './inv-summary';

export function CalcMain() {
	const [ invamount, setInvAmount ] = useState(INVMIN_MAX.min);
	const [ tenure, setTenure ] = useState(INV_TENURE.min);
	const [ applicableRate, setApplicableRate ] = useState(INV_RATE[0].value);

	const [ maturity, setMaturity ] = useState(0);
	const [ maturityDate, setMaturityDate ] = useState(0);
	const [ interestPayout, setInterestPayout ] = useState(0);

	const [ toast, setToast ] = useState({
		message: '',
		severity: '',
		open: false
	});

	useEffect(
		() => {
			let formulares = FdFormula(invamount, applicableRate, tenure);

			setMaturity(formulares.maturity);
			setMaturityDate(formulares.tenure);
			setInterestPayout(formulares.interestPayout);
		},
		[ invamount, tenure, applicableRate ]
	);

	// change event investment
	const onChangeInvestmentAmount = (value) => {
		setInvAmount(value);
	};

	//  change event tenure
	const onChangeTenure = (value) => {
		setTenure(value);
	};

	const onHandleCustomerTypeChange = (event) => {
		setApplicableRate(parseFloat(event.target.value));
	};

	const handleConfirm = () => {
		setToast({
			open: true,
			message: 'Successfully Calculated',
			severity: 'success'
		});
	};

	const handleClose = () => {
		setToast({
			open: false,
			message: '',
			severity: ''
		});
	};

	return (
		<Container maxWidth="sm" className="mt-2">
			<Grid container>
				{/* Section 1 Investment amount and customer type */}
				<Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
					<Box m={1}>
						<label className="dark heads ">investment amount</label>
						<h1 className="label heads-title">₹ {DisplayMath(invamount)}</h1>
						<Box width="90%">
							<CommonSlider
								aria-label="invest-amount"
								min={INVMIN_MAX.min}
								max={INVMIN_MAX.max}
								onChange={(data, value) => onChangeInvestmentAmount(value)}
							/>
						</Box>
					</Box>
				</Grid>
				{/* select Customer type */}
				<Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
					<label className="dark heads">customer type</label>
					<RadioGroup
						aria-label="applicableRate"
						name="rate"
						value={applicableRate}
						onChange={onHandleCustomerTypeChange}
						className="mt-1"
					>
						{INV_RATE.map((data, index) => (
							<FormControlLabel
								key={`${index}-type`}
								value={data.value}
								control={<RadioCommon size="small" />}
								label={
									<p className={`${data.value === applicableRate ? 'label' : 'light'} bold`}>
										{data.label}
									</p>
								}
								name={data.label}
							/>
						))}
					</RadioGroup>
				</Grid>

				{/* Section 2 Inv tenure * applicable intrest rate*/}
				<Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
					<Box m={1}>
						<label className="dark heads">investment tenure</label>
						<h1 className="label heads-title">{tenure} Months</h1>
						<Box width="90%">
							<CommonSlider
								aria-label="invest-amount"
								min={INV_TENURE.min}
								max={INV_TENURE.max}
								onChange={(data, value) => onChangeTenure(value)}
							/>
						</Box>
					</Box>
				</Grid>
				{/* Applicable interest rate */}
				<Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
					<Box className="mt-2">
						<label className="dark heads">applicable intrest rate</label>
						<h1 className="label heads-title">{applicableRate}%</h1>
					</Box>
				</Grid>
			</Grid>
			{/* Investment Summary */}
			<InvSummary
				maturityAmount={maturity}
				maturityBy={maturityDate}
				interestRate={applicableRate}
				interestPayout={interestPayout}
			/>

			{/* Submit  */}
			<Box display="flex">
				<Box className="mt-2 ml-a mr-a">
					<ConfirmBtn onClick={handleConfirm} />
				</Box>
			</Box>
			<Snackbar open={toast.open} message={toast.message} onClose={handleClose} severity={toast.severity} />
		</Container>
	);
}
