import React, { Component } from 'react';

class Slide extends Component {
	render() {

		var slide = [];
		this.props.slideData.forEach((slide, index) => {
			slide.push(<Slide key={index} />);
		});
		
		<div className="test">
			This is a slide...
		</div>
	}
}

class Slides extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		

		console.log('Test:', this.props.slideData);
		console.log('Test Length:', this.props.slideData.length)

		return (
			<div className="alternative-product">
				This is coming from the slide...
				<Slide />
			</div>
		)

	}

}

export default Slides;