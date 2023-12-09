import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProduct } from '../../../actions/product';
import { useParams } from 'react-router-dom';
// import './ProductDetail.css'; // Import your CSS file for styling

function ProductDetail({ product, getProduct }) {
    const { id } = useParams();

    useEffect(() => {
        // Fetch the specific product when the component mounts
        getProduct(id);
    }, [getProduct, id]);

    if (!product) {
        return <div>Loading...</div>; // You might want to add proper loading state handling
    }

    return (
        <div className="product-detail-container">
            <div className="product-detail">
                <div className="product-image">
                    <img src={product.image} alt={`Image for ${product.title}`} />
                </div>
                <div className="product-info">
                    <h2 className="product-title">{product.title}</h2>
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">{product.price}р.</p>
                    {/* Add any other product details you want to display */}
                </div>
            </div>
        </div>
    );
}

ProductDetail.propTypes = {
    product: PropTypes.object,
    getProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    product: state.product.product, // Assuming your reducer structure has 'selectedProduct' property
});

export default connect(mapStateToProps, { getProduct })(ProductDetail);
