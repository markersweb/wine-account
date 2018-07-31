import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

import FontAwesome from 'react-fontawesome';

class Pricing extends Component {

	render() {

		const pricing = (

			<div className="col-xs-12 text-left">
					<p><strong><span className="large-price"><NumberFormat value={this.props.productPrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong></p>
				
			</div>
			)

		let showVppPricing;

		if(this.props.productVppPrice) {
			showVppPricing = (
				<div className="col-xs-12 text-left">
						<p className="modal-vpp">
							<strong><span className="large-price"><FontAwesome name='tag' /> <NumberFormat value={this.props.productVppPrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong>
						</p>
				</div>
			)
		}

		let showSalePrice;

		if(this.props.productSalePrice) {
			showSalePrice = (
				<div className="col-xs-12 text-left">
						<p>
							<small>was </small><strong><span className="large-price"><NumberFormat value={this.props.productPrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong>
							<small>from </small><strong><span className="large-price"><NumberFormat value={this.props.productSalePrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong>
						</p>
				</div>
			)
		}


		// Work out which price to show.
		var showPrice;

		if(showVppPricing) {
			showPrice = showVppPricing;
		} else if(showSalePrice) {
			showPrice = showSalePrice;
		} else {
			showPrice = pricing;
		}

		return(
			<div className="row">
				{showPrice}
				{showSalePrice}
			</div>
		)

	}    

}

export default Pricing;