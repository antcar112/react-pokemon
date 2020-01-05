import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
	render() {
		const { id, name, type, xp } = this.props;
		let idStr = id.toString();
		while (idStr.length < 3) {
			idStr = '0' + idStr;
		}
		const imgSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idStr}.png`;

		return (
			<div className='Pokecard'>
				<div className='Pokecard__img-container'>
					<img src={imgSrc} className='Pokecard__img' />
				</div>

				<h3 className='Pokecard__title'>{name}</h3>
				<p className='Pokecard__type'>Type: {type}</p>
				<p className='Pokecard__xp'>EXP: {xp}</p>
			</div>
		);
	}
}

export default Pokecard;
