import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { getProducts, deleteProduct, toggleProduct } from '../../actions/product';
import product from "../../reducers/product";

class List extends Component {

    static propTypes = {
        Product: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        toggleProduct: PropTypes.func.isRequired,
        deleteProduct: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.getProducts();
    };

    render() {
        return (
            <Fragment >
                <h2>Catalog</h2>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <th>title</th>
                        <th>description</th>
                        <th>price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.Product &&this.props.Product.map(product => (
                        <tr key={product.id}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}


const mapStateToProps = (state) => ({
    Product: state.Product.Product
});

export default connect(mapStateToProps, { getProducts, deleteProduct, toggleProduct })(List);