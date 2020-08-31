import React from 'react';

import { Box } from '@material-ui/core';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';

export function ConfirmBtn(props) {
	return (
		<button className="btn_submit" {...props}>
			Confirm
			<span className="right-icon">
				<ArrowForwardSharpIcon
					fontSize="medium"
					style={{ backgroundColor: '#002CCE', borderRadius: '18px', color: '#fff' }}
					color="#fff"
				/>
			</span>
		</button>
	);
}
