import React, { Component } from 'react';

class RatingsSection extends Component {
	constructor(props) {
		super(props);

	}
	render() {

		var ratings = (
			<div>
			{this.props.ratingsInfo.map((review, index) =>
				<div className="rating-item col-xs-12 col-md-3 text-left">
					<div className={'colour-box style' + review.product.styleId}>
					</div>
					<div className="col-md-8 text-left">
						<p><span className="large-text">{review.ratingDetails.userProductRating.userOverallRating}</span> / 5</p>
					</div>
					<div className="col-md-4">
						<img src={"https://www.laithwaites.co.uk/" + review.product.smallImage} alt={review.product.name} className="img-responsive center-block" />
					</div>
					<div className="col-xs-12">
						<p>{review.ratingDetails.userProductRating.reviewText ? review.ratingDetails.userProductRating.reviewText : <a href="">Write review</a>}</p>
						<p><strong>{review.product.name} {review.product.vintage}</strong></p>
					</div>
				</div>
			)}
			</div>
		)

		return(
			<div className="ratings-section container text-center">
				<div className="row">
					<h4>My Reviews & Ratings</h4>
					{ratings}
				</div>
			</div>
		)

	}

}

export default RatingsSection;