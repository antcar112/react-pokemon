import React, { Component } from 'react';
import Pokehand from './Pokehand';
import './Pokedex.css';

class Pokedex extends Component {
	render() {
		const shufflePokemon = pokemon.sort((a, b) => {
			return 0.5 - Math.random();
		});
		const handOne = shufflePokemon.slice(0, 4);
		const handTwo = shufflePokemon.slice(4, 8);

		let handOneXP = 0;
		handOne.forEach((card) => {
			handOneXP += card.base_experience;
		});
		let handTwoXP = 0;
		handTwo.forEach((card) => {
			handTwoXP += card.base_experience;
		});

		return (
			<div className='Pokedex'>
				{/* <h1 className='Pokedex__title'>Pokedex</h1> */}
				<div className='Pokedex__container'>
					<Pokehand hand={handOne} xp={handOneXP} win={handOneXP > handTwoXP ? true : false} />
					<Pokehand hand={handTwo} xp={handTwoXP} win={handTwoXP > handOneXP ? true : false} />
				</div>
			</div>
		);
	}
}

const pokemon = [
	{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
	{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
	{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
	{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
	{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
	{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
	{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
	{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
];

export default Pokedex;
