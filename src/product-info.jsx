import React, { Component } from 'react';

class ProductInfo extends Component {

	render() {

		let colour;
		let style;
		let grape;
		let country;
		let region;
		let appellation;
		let bottleSize;
		// let unitOfMeasure

		if(this.props.productColour) {
			colour = (
				<div>
					<dt className="col-xs-4">Colour</dt><dd className="col-xs-8"><strong>{this.props.productColour}</strong></dd>
				</div>
			)
		}

		if(this.props.productStyle) {
			style = (
				<div>
					<dt className="col-xs-4">Style</dt><dd className="col-xs-8"><strong>{this.props.productStyle}</strong></dd>
				</div>
			)
		}

		if(this.props.productGrape) {
			grape = (
				<div>
					<dt className="col-xs-4">Grape</dt><dd className="col-xs-8"><strong>{this.props.productGrape}</strong></dd>
				</div>
			)
		}

		if(this.props.productCountry) {
			country = (
				<div>
					<dt className="col-xs-4">Country</dt><dd className="col-xs-8"><strong>{this.props.productCountry}</strong></dd>
				</div>
			)
		}

		if(this.props.productRegion) {
			region = (
				<div>
					<dt className="col-xs-4">Region</dt><dd className="col-xs-8"><strong>{this.props.productRegion}</strong></dd>
				</div>
			)
		}

		if(this.props.productAppellation) {
			appellation = (
				<div>
					<dt className="col-xs-4">Appellation</dt><dd className="col-xs-8"><strong>{this.props.productAppellation}</strong></dd>
				</div>
			)
		}

		if(this.props.productBottleSize) {
			bottleSize = (
				<div>
					<dt className="col-xs-4">Size</dt><dd className="col-xs-8"><strong>{this.props.productBottleSize} <span className="text-lowercase">{this.props.productUnitOfMeasure}</span></strong></dd>
				</div>
			)
		}

		return(
			<div className="product-info">
				<dl className="row">
					{colour}
					{style}
					{grape}
					{country}
					{region}
					{appellation}
					{bottleSize}
				</dl>
			</div>
		)

	}

}

export default ProductInfo;