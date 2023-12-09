import {Component, Fragment} from 'react';
import {connect, Provider} from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts, addProducts } from '../../../actions/product';
import './ProductCatalog.css'; // Import your CSS file for styling
import Card from 'react-bootstrap/Card';
import store from "../../../store";


class ProductCatalog extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired,
        getProducts: PropTypes.func.isRequired,
        addProducts: PropTypes.func.isRequired,
    };


    componentDidMount() {
        // Fetch products when the component mounts
        this.props.getProducts();
    }


    render() {

        const { products } = this.props;

        return (
            <div className="form-signin mt-5 text-center">

                        <div className="product-catalog-container">
                            <div className="product-list">
                                {products.map((product) => (

                                    <Card className="product-item"  style={{ width: '18rem' }} >
                                        <a href={"/catalog/"+product.id} className="product-link">
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body >
                                                <Card.Title >{product.title}</Card.Title>
                                                <Card.Text className="product-title">{product.title}</Card.Text>
                                                <Card.Text className="product-price">{product.price}$</Card.Text>
                                            </Card.Body>
                                        </a>
                                    </Card>
                                ))}
                            </div>
                        </div>
            </div>
                    );
    }
}

const mapStateToProps = (state) => ({
    products: state.product.product, // Assuming your reducer structure has 'product' property
});

export default connect(mapStateToProps, { getProducts, addProducts })(ProductCatalog);
