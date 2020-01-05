import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokehand.css';

class Pokehand extends Component {
	render() {
		const hand = this.props.hand;
		let title;
		if (this.props.win) {
			title = <h2 className='Pokehand--win'>Winning Hand</h2>;
		} else {
			title = <h2 className='Pokehand--lose'>Losing Hand</h2>;
		}

		return (
			<div className='Pokehand'>
				{title}
				<p>Total EXP: {this.props.xp}</p>
				<div className='Pokehand__container'>
					{hand.map((pokemon) => (
						<Pokecard
							className='Pokehand__card'
							id={pokemon.id}
							name={pokemon.name}
							type={pokemon.type}
							xp={pokemon.base_experience}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Pokehand;
