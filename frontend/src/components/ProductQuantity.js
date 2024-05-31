// src/components/ProductQuantity.js
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);

    const increase = () => {
        setQuantity(prevQuantity => (prevQuantity < 10 ? prevQuantity + 1 : prevQuantity));
    };

    const decrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <div>
            <FaMinus onClick={decrease} style={{ cursor: 'pointer' }} />
            <span>{quantity}</span>
            <FaPlus onClick={increase} style={{ cursor: 'pointer' }} />
        </div>
    );
}

export default ProductQuantity;