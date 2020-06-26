import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from '../Loading';
import Product from '../Product/Product';

export default function Products(props){
    const {products: {result, loading, error}, addProductCar} = props;
    

    
    return (
        <Container>
            <Row>
                 {loading || !result 
                 ? (
                     <Loading />
                 )
                 :
                     result.map((product, index)=> <Product key={index} product={product} addProductCar = {addProductCar} />
                     )}

                    

                 
            </Row>
        </Container>
    )
}