import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import NanoAjax from 'nanoajax';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Rating from './rating';
import ProductInfo from './product-info';
// import Pricing from './pricing';
import ShowAccolade from './show-accolade';
import Alternatives from './alternatives';
// import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

class NewVintage extends Component {
	constructor(props) {
		super(props);
		this.newVintageModal = this.newVintageModal.bind(this)
		this.itemCode = this.props.productId
		this.state={
			alternativeInfo: [],
			alternativeData: [],
			newVintageID: [],
			newItemCode: [],
			apiResponse: false,
			showModal: false
		};

		this.close = this.close.bind(this);

	}
	componentDidMount() {
		/* Get the data from API */
		this.getAlternative();
		this.state = {
			apiResponse: 'Fetching alternative product...',
		};
	}

	getAlternative() {

		const itemCode = this.itemCode;
		const url = `https://www.laithwaites.co.uk/api/product/alternateItem/` + itemCode

		  NanoAjax.ajax({url}, (itemCode, response) => {

	      const data = JSON.parse(response);
	      const AlternativeInfo = data.response.relatedProducts;
	      if (AlternativeInfo.length) {
	      	console.log('Related Products:', AlternativeInfo);
	      }

	      // this.setState({
	      //   alternativeInfo: AlternativeInfo,
	      //   apiResponse: true
	      // });
	    });

	}

	newVintageModal(event) {
		this.setState({
			showModal: true

		});
		const itemCode = this.itemCode; // this is the code of the original product.
    	console.log(itemCode + ' is being vintaged');
    	// console.log('New Vintage Id: ' + this.state.newVintageId);
    	// this.getAlternativeData(); // Got the alternative item codes so now run api to get the data.

	}

	getAlternativeData() {
		// What am I looking up?
		console.log('Alternative Bottles:', this.state.alternativeInfo);

		// Set some variables.
		const altItemCode = this.state.alternativeInfo;
		let altData;
		let newData = [];

		// For each of the alternative products, get their data.
		for (var i = 0; i < altItemCode.length; i++) {
			const url = 'https://www.laithwaites.co.uk/api/product/item/' + altItemCode[i];

			NanoAjax.ajax({url}, (altItemCode, response) => {
				altData = JSON.parse(response);
				newData.push(altData.response);
			});
		}
		console.log('Alternative Data:', newData);
		this.setState({
			alternativeData: newData,
		});
		this.forceUpdate();
	}

	close(event) {
		this.setState({
    		showModal: false
    	});
	}

	render() {

		return(
			<div>
				{this.state.alternativeInfo.length ?
				<div className="alternative-product">
					<div className="text-center button-holder">
						<button type="button" className="btn btn-secondary btn-block" onClick={this.newVintageModal}>
							{/* Should probably move this logic out of the return section */}
							{this.state.alternativeInfo.length === 1 ?
								<span>{this.state.alternativeInfo.length} Alternative</span>
								: <span>{this.state.alternativeInfo.length} Alternatives</span>
							}
						</button>
					</div>
					<div>
					<Modal show={this.state.showModal} onHide={this.close} bsSize="large">
						<Modal.Header closeButton>
							<Modal.Title>Alternative to {this.props.productName} {this.props.productVintage}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							Test. test.
						</Modal.Body>
						<Modal.Footer>
							<Button onClick={this.close}>Close</Button>
						</Modal.Footer>
					</Modal>
				</div>
				</div>
				: ''}
			</div>
		)

	}

}

export default NewVintage;