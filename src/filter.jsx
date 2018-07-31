import React, { Component } from 'react';
import ShowAccolade from './show-accolade';
import Alternatives from './alternatives';
import Pricing from './pricing';
import Rating from './rating';
import ProductInfo from './product-info';
import Reorder from './reorder';

import FontAwesome from 'react-fontawesome';

class ProductRow extends Component {
	render() {
		return (
	      <div className="item well">
	        <div className="col-xs-12 mini-icons">
	              <div className="row">
	                <div className="col-xs-2 text-center">
	                  <span className="badge">{this.props.userItemDetails.quantityPurchased}</span>
	                </div>
	                <div className="col-xs-2 text-center">
	                  {this.props.whereUsed.inFavourites ? <FontAwesome name='heart' /> : <div className="col-xs-2 text-center"></div>}
	                  {this.props.whereUsed.inAntiFavouritesList ? <FontAwesome name='thumbs-down flip-horizontal' /> : <div className="col-xs-2"></div>}
	                </div>
	                {this.props.skus.length ? 
	                <span>
	                {this.props.skus[0].vppPrice ?
	                  <div className="col-xs-2 text-center">
	                    <FontAwesome name='tag' />
	                  </div>
	                  : '' }
	                </span>
	                : <div className="col-xs-2 text-center"><FontAwesome name='tag' className="inactive" /></div> }

	                {this.props.inventoryInfo ?
	                <span>
	                {this.props.inventoryInfo.summaryAvailabilityStatus === 'low_stock' ?
	                    <div className="col-xs-2 text-center low-stock">
	                      <FontAwesome name='arrow-down' /> 
	                      <div className="col-xs-12"><span className="label label-warning">{this.props.inventoryInfo.stockQty}</span></div>
	                    </div>
	                : <div className="col-xs-2 text-center"><FontAwesome name='arrow-down' className="inactive" /></div> }
	                </span>
	                : <div className="col-xs-2 text-center"><FontAwesome name='arrow-down' className="inactive" /></div> }
	                {this.props.whereUsed.inUserRatedWines ? 
	                <div className="col-xs-2 text-center">
	                  <FontAwesome name='pencil' />
	                </div>
	                : <div className="col-xs-2 text-center"><FontAwesome name='comment' className="inactive" /></div> }
	                <div className="col-xs-2 text-center">
	                  <FontAwesome name='repeat' />
	                </div>
	              </div>
	        </div>
	        <div className="col-xs-12 col-sm-4 text-center">
	            <div className="row image-holder">
	              <img src={"https://www.laithwaites.co.uk/" + this.props.smallImage} alt={this.props.product} className="img-responsive center-block" /><br />
	              <ShowAccolade accolades={this.props.accolades} />
	              <div className="hidden-xs">
	              <div className={'wine-colour style' + this.props.styleId}></div>
	              <div className="alc-percent"><strong>{this.props.alcoholPercent}%</strong></div>
	              </div>
	          </div>
	        </div>
	        <div className="col-xs-12 col-sm-8">
	          <div className="row">
	            
	            <h4>{this.props.name} {this.props.vintage}</h4>

	            {this.props.skus.length ?
		          <Pricing 
		            productPrice={this.props.skus[0].listPrice}
		            proudctSalePrice={this.props.skus[0].salePrice}
		            productVppPrice={this.props.skus[0].vppPrice}
		          />
		          : <div>
		              <span className="label label-info sold-out">Sold Out</span>
		              <Alternatives
		                productId={this.props.productInfo.itemCode}
		                productName={this.props.productInfo.name}
		                productVintage={this.props.productInfo.vintage}
		              />
		            </div> }
	            {this.props.inventoryInfo ?
	              <span>
	              {this.props.inventoryInfo.summaryAvailabilityStatus === 'low_stock' ? <span className="label label-warning sold-out">Low stock</span> : '' }
	              </span>
	            : ''}
	            <Rating productScore={this.props.rating} />
	            <p>{this.props.webHeadline}</p>

	            <div className="hidden-xs">
	            <ProductInfo
	                productColour={this.props.productInfo.colourName}
	                productStyle={this.props.productInfo.styleName}
	                productGrape={this.props.productInfo.grapeName}
	                productCountry={this.props.productInfo.countryName}
	                productRegion={this.props.productInfo.regionName}
	                productAppellation={this.props.productInfo.appellationName}
	                productBottleSize={this.props.productInfo.bottleSize}
	                productUnitOfMeasure={this.props.productInfo.unitOfMeasure}
	            />
	            </div>
	          </div>
	        </div>
	        <div className="col-xs-12">
	          {this.props.skus.length ?
	            <div className="text-center button-holder">
	              <div className="row">

	              <Reorder 
	                productInfo={this.props.productInfo}
	              />

	              </div>
	            </div>
	          : ''}
	        </div>
	        </div>
	    );
	}
}

class ProductTable extends Component {
	render() {
		var rows = [];
		this.props.products.forEach((producti, index) => {
			if (producti.bottlei.product.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) === -1 || (!producti.bottlei.product.skus.length && this.props.inStockOnly)) {
				return;
			}
			rows.push(<ProductRow
		        key={index}
		        product={producti.bottlei.product.name}
		        name={producti.bottlei.product.name}
		  	  	vintage={producti.bottlei.product.vintage}
		        alcoholPercent={producti.bottlei.product.alcoholPercent}
		        smallImage={producti.bottlei.product.smallImage}
		        styleId={producti.bottlei.product.styleId}
		        webHeadline={producti.bottlei.product.webHeadline}
		        accolades={producti.bottlei.product.accolades}
		        rating={producti.bottlei.product.ratingDetails}
		        skus={producti.bottlei.product.skus}
		        productInfo={producti.bottlei.product}
		        inventoryInfo={producti.bottlei.product.inventoryInfo}
		        userItemDetails={producti.bottlei.userItemDetails}
		        whereUsed={producti.bottlei.whereUsed}
		        true={true}
		        />);
		});

		var returnedResultsNo = rows.length;

		let returnedResultsText;

		if(returnedResultsNo === this.props.listInfo.numberOfItems) {
			// returnedResultsText = (
			// 	<div className="returned-results">
			// 		<h3><span className="large-text">{this.props.listInfo.numberOfItems}</span></h3>
			// 	</div>
			// )
		} else if (!returnedResultsNo) {
			returnedResultsText = (	
					<h2>Sorry, no results</h2>
			)
		} else {
			// returnedResultsText = (
			// 	<div className="returned-results">
			// 		<h3><span className="large-text">{returnedResultsNo}</span> / {this.props.listInfo.numberOfItems}</h3>
			// 	</div>
			// )
			// returnedResultsText = (
			// 	<div className="returned-results-number">
			// 		<span>{returnedResultsNo}</span>
			// 	</div>
			// )
			if (returnedResultsNo === 1) {
				returnedResultsText = (
					<div className="returned-results">
						<h4>Showing {returnedResultsNo} wine</h4>
					</div>
				)
			} else {
				returnedResultsText = (
					<div className="returned-results">
						<h4>Showing <strong>{returnedResultsNo}</strong> wines</h4>
					</div>
				)
			}
		}

		// This is where the product tile gets rendered.
		return (
			<div className="col-xs-12">
				<div className="text-center">{returnedResultsText}</div>
				<div className="purchased-container">
					<div className="row">
						{rows}
					</div>
				</div>
			</div>
		);

	}
}

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
		this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
	}

	handleFilterTextInputChange(e) {
		this.props.onFilterTextInput(e.target.value);
	}

	handleInStockInputChange(e) {
		this.props.onInStockInput(e.target.checked);
	}

	render() {
		return (
			<form>
		        <div className="col-xs-12 col-md-8 col-md-offset-2">
		        <div className="col-xs-12 col-md-8 col-md-offset-2">
		          <div className="form-group form-group-lg search-input text-center">
		          <input
		            type="text"
		            className="form-control text-center"
		            placeholder="&#xf002; Search your wines..."
		            value={this.props.filterText}
		            onChange={this.handleFilterTextInputChange}
		          />
		          </div>
		        </div>
		        </div>
		      </form>
		);
	}
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false,
    };
    
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleInStockInput = this.handleInStockInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }
  
  handleInStockInput(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextInput={this.handleFilterTextInput}
          onInStockInput={this.handleInStockInput}
          listInfo={this.props.listInfo}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          listInfo={this.props.listInfo}
        />
      </div>
    );
  }
}

export default FilterableProductTable;