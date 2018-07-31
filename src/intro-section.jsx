import React, { Component } from 'react';

class IntroSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}

	render() {

		// Set percentages to 0.
		var colourRed = 0;
		var colourWhite = 0;
		var colourRose = 0;

		this.props.productData.forEach((product, index) => {
			if (product.bottlei.product.colourId === 'Red') {
				colourRed++;
			}
			if (product.bottlei.product.colourId === 'White') {
				colourWhite++;
			}
			if (product.bottlei.product.colourId === 'Rose') {
				colourRose++;
			}
		});

		const totalColours = colourRed + colourWhite + colourRose;
		// console.log('Total Colours: ' + totalColours);

		var redPercent = (colourRed / totalColours) * 100;
		var whitePercent = (colourWhite / totalColours) * 100;
		var whiteStartPercent = redPercent;
		var rosePercent = (colourRose / totalColours) * 100;
		var roseStartPercent = redPercent + whitePercent;
		
		const blend = { backgroundImage: "linear-gradient(130deg, #371722, #ede4aa "+ whiteStartPercent +"%, #F1AFA0 "+ roseStartPercent +"%)" }
		
		console.log('Test:', this.props.listData.numberOfItems);

		return(
				<section className="jumbotron jumbotron-fluid" style={blend}>
		            <div className="container-fluid">
		            <div className="col-sm-6 col-sm-offset-3 text-center">
		            	<h1 className="display-3">My Purchased</h1>
		            	<span className="lead">All your purchases in one place. Easily rate and review your wines, add tasting notes and mark wines you would buy again - or restock your cellar now with all your favourites.
		            	</span>
		            </div>
		            <div className="col-xs-12 text-center">
	            		<div className="purchased-total">{this.props.listData.numberOfItems}</div>
            		</div>
		            </div>
	            </section>
			)

	}

}

export default IntroSection;