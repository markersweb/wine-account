import React, { Component } from 'react';

class MenuSection extends Component {
	constructor(props) {
		super(props);

	}
	render() {

		return(
			<div className="container-fluid text-center menu-section">
				<div className="row">
					<h4><a href="">My Stats</a> | <a href="">My Favourites</a> | <a href="">My Reviews & Ratings ({this.props.ratingsData.numberOfItems})</a></h4>
				</div>
			</div>
		)

	}

}

export default MenuSection;