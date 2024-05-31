// src/pages/OrderPage.js
import React from 'react';
import ProductRow from '../components/ProductRow';
import products from '../data/products';

function OrderPage() {
    return (
        <>
            <h2>Order Page</h2>
            <p>Welcome to the order page! Here, you can view a list of products and place your order. Browse through our selection and follow the instructions to complete your purchase.</p>
            <article>
                <table id="productSelection">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <ProductRow product={product} key={index} />
                        ))}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default OrderPage;