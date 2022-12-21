import React from 'react'
import './styles.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <h1 class="py-5 slogan">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer