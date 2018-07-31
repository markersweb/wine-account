import React, { Component } from 'react';
import NanoAjax from 'nanoajax';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Slides from './slides';

class Alternatives extends Component {
	constructor(props) {
		super(props);
		this.newVintageModal = this.newVintageModal.bind(this)
		this.itemCode = this.props.productId
		this.state = {
			alternativeItemCodes: [],
			// alternativeItemData: [],
			showModal: false
		};
		this.close = this.close.bind(this);
	}

	componentDidMount() {
		/* Get data from the API */
		const itemCode = this.itemCode;
		const url = `https://www.laithwaites.co.uk/api/product/alternateItem/` + itemCode

		NanoAjax.ajax({url}, (itemCode, response) => {

			const data = JSON.parse(response);
			const alternativeItemCodes = data.response.relatedProducts;
			if (alternativeItemCodes.length) {
				console.log('Related Product Codes:', alternativeItemCodes);
			}

			this.setState({
				alternativeItemCodes: alternativeItemCodes
			});

		});

	}

	getAlternativeData() {
		console.log('Here 2', this.state.alternativeItemCodes);
		console.log('This:', this.state.alternativeItemCodes.length);

		const altItemCode = this.state.alternativeItemCodes;

		let altData;
		let alternativeItemData = [];

		for (var i = 0; i < altItemCode.length; i++) {
			const url = 'https://www.laithwaites.co.uk/api/product/item/' + altItemCode[i];

			NanoAjax.ajax({url}, (altItemCode, response) => {
				altData = JSON.parse(response);
				alternativeItemData.push(altData.response);
			});
			console.log('Alternative Data:', alternativeItemData);
		}
		this.setState({
			alternativeItemData: alternativeItemData
		});
		this.forceUpdate();
	}

	newVintageModal(event) {
		this.setState({
			showModal: true
		});
		this.getAlternativeData();
	}

	close(event) {
		this.setState({
    		showModal: false
    	});
	}

	render() {

		return (
				<div className="alternative-product">
					<div className="text-center button-holder">
				<button type="button" className="btn btn-secondary btn-block" onClick={this.newVintageModal}>
					Modal
				</button>
			</div>
			<div>
			<Modal show={this.state.showModal} onHide={this.close} bsSize="large">
				<Modal.Header closeButton>
					<Modal.Title>Alternative to {this.props.productName} {this.props.productVintage}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Slides slideData={this.state.alternativeItemData} />
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.close}>Close</Button>
				</Modal.Footer>
			</Modal>
			</div>
			</div>
		)

	}    

}

export default Alternatives;