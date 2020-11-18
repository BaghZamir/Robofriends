import React from 'react';

const Scroll = (props) => {//children blir automatisk 
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid white', height: '800px'}}>
			{props.children}
		</div>
	)
}

export default Scroll;