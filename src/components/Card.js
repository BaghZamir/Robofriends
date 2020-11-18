import React from 'react';

const Card = ({name, email, id}) =>{//tar imot en object som blir destructuren (delt opp i variabler)
	//kan også destructures i funksjonen som const {name, email, id} = props; Greit når man har mange properties.
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;