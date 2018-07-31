import React, { Component } from 'react';

class ShowAccolade extends Component {
	constructor(props) {
		super(props);
		this.state = {
			test: this.props.accolades,
		}
	}
	render() {

		const test = this.state.test;

		const accolade = test.map((award, index) => (
			<div key={index}>
			{award.categoryId === '2'
				? <img src="https://www.laithwaites.co.uk/images/uk/en/common/icons/icon_award_winning_small.png" alt={award.accoladeCategoryText} title={award.accoladeCategoryText + ' medal winner'} />
				: ''}
			</div>

		));

		// console.log(accolade);

		return(
			<div className="award-holder">
				{accolade}
			</div>
		)

	}

}

export default ShowAccolade;