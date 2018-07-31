import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Rating extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: []
		}
	};

	render() {

	let stars;
	let reviews;

	if(this.props.productScore) {
		const score = this.props.productScore.productRating.avgRating;
		const noOfReviews = this.props.productScore.productRating.numberOfReviews;

		// 5 stars
		if (score > 4.9) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>);
		}
		// 4.5 stars
		if (score > 4.4 && score < 5) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i></span>);
		}
		// 4 stars
		if (score > 3.9 && score < 4.5) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></span>);
		}
		// 3.5 stars
		if (score > 3.4 && score < 4) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i><i className="fa fa-star-o"></i></span>);
		}
		// 3 stars
		if (score > 2.9 && score < 3.5) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></span>);
		}
		// 2.5 stars
		if (score > 2.4 && score < 3) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i></span>);
		}
		// 2 stars
		if (score > 1.9 && score < 2.5) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></span>);
		}
		// 1.5 stars
		if (score > 1.4 && score < 2) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star-half-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></span>);
		}
		// 1 star
		if (score > 0.9 && score < 1.5) {
			stars = (<span><i className="fa fa-star"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i><i className="fa fa-star-o"></i></span>);
		}
		// review / reviews
		if (noOfReviews === 1) {
			reviews = (<span>Review</span>)
		} else {
			reviews = (<span>Reviews</span>)
		}

		return(<p>{stars} <span className="large-text">{score}</span> / 5 <small>(<NumberFormat value={noOfReviews} displayType={'text'} thousandSeparator={true} /> {reviews})</small></p>);

		} else {
			return (null);
		}

	}

}

export default Rating;