import React, { Fragment, useContext, useState, useEffect } from 'react';
import useNavigation from '../../hooks/useNavigation';
import { contextProducts } from '../../context/ProductsContext'
import './DetailsProduct.css';

const DetailsProduct = () => {
  const { handleNavigation } = useNavigation();
  const { handleGetProductId, currentIdProduct } = useContext(contextProducts);
  const [productDetails, setProductDetails] = useState({});

  const handleGetDate = (dateString) => {
    const date = new Date(dateString);

    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  useEffect(() => {
    setProductDetails(handleGetProductId(currentIdProduct))
  }, [currentIdProduct])

  return (
    <Fragment>
      <div>
        <button onClick={() => handleNavigation("ListProducts")}>
          <span>Back</span>
        </button>
      </div>
      <div className="details-cart">
        <span className="details-cart__title">{productDetails.name}</span>
        <div key={productDetails.id} className="details-cart__item">
          <div className="details-card__image" style={{ backgroundImage: `url(${productDetails.image})` }} />
          <span>Description: </span>
          <p>{productDetails.description}</p>
          <span>Price: </span>
          <p>${productDetails.price}</p>
          <span>Creation Date:</span>
          <p> {productDetails.creationDate && handleGetDate(productDetails.creationDate)}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailsProduct;
