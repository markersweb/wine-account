import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import NumberFormat from 'react-number-format';

class Reorder extends Component {
    constructor(props) {
        super(props)
        // this.reorderWine = this.reorderWine.bind(this)
        this.addToBasket = this.addToBasket.bind(this)
        this.state = {
            // showModal: false,
            basketArray: [],
        };

        // this.close = this.close.bind(this);

    }
    
    addToBasket(event) {
        console.log(event.target.closest('.reorder-button').querySelector('input[type=radio]:checked').value);
        var basketItem = event.target.closest('.reorder-button').querySelector('input[type=radio]:checked').value;
        var itemQty = event.target.closest('.reorder-button').querySelector('input[type=number]').value;
        console.log(this.state.basketArray);
        console.log('Qty: ' + itemQty);

        var item = {};
        item["itemCode"] = basketItem;
        item["quantity"] = itemQty;
        // this.state.basketArray.push(obj);
        
        // var updatedBasket = this.state.basketArray.push(obj);

        this.setState({ basketArray: [...this.state.basketArray, ...[{item}] ] }) //another array

        // this.state.basketArray.push(obj);
        // this.setState({
        //    basketArray: Object.assign({}, this.state.basketArray, {
        //         basketArray: updatedBasket,
        //       }),
        // });
    console.log(basketItem + ' is added to basket');
    console.log('BasketArray: ' + JSON.stringify(this.state.basketArray));

    }

    render() {

        let vppBanner;
        let bottleHeader;
        let caseHeader;
        let singlePricing;
        let vppPricing;
        let threeBottlePricing;
        let sixBottlePricing;
        let twelveBottlePricing;
        let twentyBottlePricing;
        let twentyFourBottlePricing;
        let buttonIndex;
        let button;

        this.props.productInfo.skus.forEach((sku, index) => {
            // console.log(sku);
            var caseIdent = sku.itemCode;
            caseIdent = caseIdent.substring(1);
            var buttonIndex = 'button' + caseIdent;

            var itemCode = sku.itemCode;
            if(itemCode.startsWith('Q') && sku.vppApplier) {
                vppPricing = (
                    <span className="modal-vpp"><FontAwesome name='tag' /> <span className="large-text"><strong><NumberFormat value={sku.vppPrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></strong></span></span>
                )
                vppBanner =(
                <div className="row">
                    <div className="col-xs-12 text-center vpp-banner">
                        <strong><FontAwesome name='tag' /> Save when you mix 12 or more</strong>
                    </div>
                </div>
                )
            }

            // Single bottles
            if(itemCode.startsWith('Q')) {
                bottleHeader = <h4>By Bottle</h4>
                singlePricing = (
                    <div className="row text-center price-row">
                        <div className="col-xs-2 modal-radio">
                            {/*<FontAwesome name='circle-o' size="2x" />*/}
                            <input type="radio" value={sku.salesCode} name={caseIdent} defaultChecked={true} />
                        </div>
                        <div className="col-xs-4">
                            <input className="form-control text-center" type="number" defaultValue="1" />
                        </div>
                        <div className="col-xs-6 text-right col-price">
                            {vppPricing} 

                            <strong><span className="large-text"><NumberFormat value={sku.listPrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong>
                        </div>
                    </div>
                )
            }

            // Three bottles
            if(itemCode.startsWith('T')) {
                console.log('T Code!');
                threeBottlePricing = (
                    <div className="row text-center price-row">
                        <div className="col-xs-2 modal-radio">
                            {/*<FontAwesome name='circle-o' size="2x" />*/}
                            <input type="radio" value={sku.salesCode} name={caseIdent} />
                        </div>
                        <div className="col-xs-4 text-left">
                            <FontAwesome name='cube' size="3x" /> <span className="large-text">{sku.numberOfBottles}</span>
                        </div>
                        <div className="col-xs-6 text-right col-price">
                            <strong><span className="large-text"><NumberFormat value={sku.salePrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong> *<br />
                            only <strong><NumberFormat value={sku.salePricePerBottle} decimalPrecision={2} displayType={'text'} prefix={'£'} /></strong> a bottle<br />
                            * with any other 12 bottles ordered
                        </div>
                </div>
                )
            }

            // Six bottles
            if(itemCode.startsWith('B')) {
                console.log('B Code!');
                sixBottlePricing = (
                    <div className="row text-center price-row">
                        <div className="col-xs-2 modal-radio">
                            {/*<FontAwesome name='circle-o' size="2x" />*/}
                            <input type="radio" value={sku.salesCode} name={caseIdent} />
                        </div>
                        <div className="col-xs-4 text-left">
                            <FontAwesome name='cube' size="3x" /> <span className="large-text">{sku.numberOfBottles}</span>
                        </div>
                        <div className="col-xs-6 text-right col-price">
                            <strong><span className="large-text"><NumberFormat value={sku.salePrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong><br />
                            only <strong><NumberFormat value={sku.salePricePerBottle} decimalPrecision={2} displayType={'text'} prefix={'£'} /></strong> a bottle
                            
                        </div>
                    </div>
                )
            }

            // Twelve bottles
            if(itemCode.startsWith('C')) {
                console.log('C Code!');
                twelveBottlePricing = (
                    <div className="row text-center price-row">
                        <div className="col-xs-2 modal-radio">
                            {/*<FontAwesome name='circle-o' size="2x" />*/}
                            <input type="radio" value={sku.salesCode} name={caseIdent} />
                        </div>
                        <div className="col-xs-4 text-left">
                            <FontAwesome name='cube' size="3x" /> <span className="large-text">{sku.numberOfBottles}</span>
                        </div>
                        <div className="col-xs-6 text-right col-price">
                            <strong><span className="large-text"><NumberFormat value={sku.salePrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong><br />
                            only <strong><NumberFormat value={sku.salePricePerBottle} decimalPrecision={2} displayType={'text'} prefix={'£'} /></strong> a bottle
                            
                        </div>
                    </div>
                )
            }

            // Twenty bottles
            if(itemCode.startsWith('K')) {
                console.log('K Code!');
                twentyBottlePricing = (
                    <div className="row text-center price-row">
                        <div className="col-xs-2 modal-radio">
                            {/*<FontAwesome name='circle-o' size="2x" />*/}
                            <input type="radio" value={sku.salesCode} name={caseIdent} />
                        </div>
                        <div className="col-xs-4 text-left">
                            <FontAwesome name='cube' size="3x" /> <span className="large-text">{sku.numberOfBottles}</span>
                        </div>
                        <div className="col-xs-6 text-right col-price">
                            <strong><span className="large-text"><NumberFormat value={sku.salePrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong><br />
                            only <strong><NumberFormat value={sku.salePricePerBottle} decimalPrecision={2} displayType={'text'} prefix={'£'} /></strong> a bottle
                            
                        </div>
                    </div>
                )
            }

            // Twenty Four bottles
            if(itemCode.startsWith('H')) {
                console.log('H Code!');
                twentyFourBottlePricing = (
                    <div className="row text-center price-row">
                        <div className="col-xs-2 modal-radio">
                            {/*<FontAwesome name='circle-o' size="2x" />*/}
                            <input type="radio" value={sku.salesCode} name={caseIdent} />
                        </div>
                        <div className="col-xs-4 text-left">
                            <FontAwesome name='cube' size="3x" /> <span className="large-text">{sku.numberOfBottles}</span>
                        </div>
                        <div className="col-xs-6 text-right col-price">
                            <strong><span className="large-text"><NumberFormat value={sku.salePrice} decimalPrecision={2} displayType={'text'} prefix={'£'} /></span></strong><br />
                            only <strong><NumberFormat value={sku.salePricePerBottle} decimalPrecision={2} displayType={'text'} prefix={'£'} /></strong> a bottle
                            
                        </div>
                    </div>
                )
            }

            if(!itemCode.startsWith('Q')) {
                caseHeader = <h4>By Case</h4>
            }

            button = (
                <span>
                    <button type="button" className="btn btn-success btn-block" id={buttonIndex} name={buttonIndex} onClick={this.addToBasket}>Add to Basket</button>
                </span>
            )

        });

        return (
        <div>
            <div className="reorder-button clearfix">

            <h5>BUYING OPTIONS</h5>

            {caseHeader}
            {twentyFourBottlePricing}
            {twentyBottlePricing}
            {twelveBottlePricing}
            {sixBottlePricing}
            {threeBottlePricing}
            {bottleHeader}
            {singlePricing}
            <div className="col-xs-12">
                {/*<button type="button" className="btn btn-success btn-block" onClick={this.reorderWine}>Add to Basket</button>*/}
                {/*<button type="button" className="btn btn-success btn-block" name={this.buttonIndex} onClick={this.addToBasket}>Add to Basket</button>*/}
                {button}
            </div>
            </div>
            <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
                <Modal.Header closeButton>
                    <Modal.Title>Buy {this.props.productInfo.name} {this.props.productInfo.vintage}</Modal.Title>
                </Modal.Header>
                 <Modal.Body>
                 {vppBanner}
                 <div className="container-fluid">
                 <div className="row">
                 <div className="col-xs-2">
                    <img src={"https://www.laithwaites.co.uk/" + this.props.productInfo.smallImage} alt={this.props.productInfo.name} className="img-responsive center-block modal-image" />
                 </div>
                 <div className="col-xs-4">
                    {this.props.productInfo.webHeadline}
                </div>
                <div className="col-xs-6 modal-pricing">
                     {caseHeader}
                     {twentyBottlePricing}
                     {twelveBottlePricing}
                     {sixBottlePricing}
                     {threeBottlePricing}
                     {bottleHeader}
                     {singlePricing}
                 </div>
                 </div>
                 </div>
              </Modal.Body>
              <Modal.Footer>
                <Button className="btn btn-primary">Add to basket</Button>
              </Modal.Footer>
            </Modal>

        </div>);
    }
}

export default Reorder;