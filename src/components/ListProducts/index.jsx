import React, { useContext } from 'react';
import { contextProducts } from '../../context/ProductsContext.jsx'
import { contextShoppingCart } from '../../context/ShoppingCartContext.jsx'
import useProductSearch from '../../hooks/useProductSearch.jsx';
import useNavigation from '../../hooks/useNavigation.jsx';
import useAddToCart from '../../hooks/useAddToCart.jsx';
import './ListProducts.css';


const ListProducts = () => {
  const { products, setCurrentIdProduct } = useContext(contextProducts);
  const { handleGetTotalProducts } = useContext(contextShoppingCart);
  const { searchTerm, filteredProducts, sortOrder, handleSearch, handleSort } = useProductSearch(products);
  const { handleNavigation } = useNavigation();
  const { handleAddToCart } = useAddToCart()

  return (
    <div className="container">
      <div className='bar'>
        <input
          className='bar-search'
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className='bar-actionButtons'>
          <button onClick={handleSort}>
            {sortOrder === 'asc' ? 'Ascendente' : 'Descendente'}
          </button>
          <button onClick={() => handleNavigation('createProduct')}>
            + Create product
          </button>
          <button className='bar-actionButtons__spanButton' onClick={() => handleNavigation('shoppingCart')}>
            Shopping Cart <span> {handleGetTotalProducts()}</span>
          </button>
        </div>
      </div>
      <hr />
      <div className="product-list">
        {(Array.isArray(filteredProducts)) && filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-card__image" style={{ backgroundImage: `url(${product.image})` }}></div>
            <div className="product-card__description">
              <span className="product-card__name">{product.name}</span>
              <p>{product.description}</p>
              <p className="product-card__price">Precio: ${product.price}</p>
              <div className="product-card__buttons">
                <button onClick={() => handleAddToCart(product.id)}>
                  Add to Cart
                </button>
                <button onClick={() => {
                  setCurrentIdProduct(product.id)
                  handleNavigation('detailsProduct')
                }}>
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts;