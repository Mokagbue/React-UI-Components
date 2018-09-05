import React from 'react';
import './Button.css';

function NumberButtons(props) {
	return  <div className="calButtons">
                <h4>{props.calculatorButton.symbol}</h4>
			</div>
};

export default NumberButtons;