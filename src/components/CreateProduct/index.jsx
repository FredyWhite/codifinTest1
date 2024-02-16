import React, { useState, useContext, Fragment } from 'react';
import { contextProducts } from '../../context/ProductsContext';
import useNavigation from '../../hooks/useNavigation';
import useCreateRandomId from '../../hooks/useCreateRandomId';
import './CreateProduct.css';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [errors, setErrors] = useState({});
  const { products, setProducts } = useContext(contextProducts);
  const { handleNavigation } = useNavigation();
  const { handleCreateRandomId } = useCreateRandomId();

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      const newProduct = {
        name: productName,
        price: parseFloat(productPrice),
        image: productImage,
        description: productDescription,
        creationDate: new Date().toISOString(),
        id: handleCreateRandomId(4),
        quantity:0,
      };

      setProducts([...products, newProduct]);
      setProductName('');
      setProductPrice('');
      setProductImage('');
      setProductDescription('');
      setErrors({});
      handleNavigation("ListProducts");
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!productName.trim()) {
      errors.name = 'Product name is required';
    }

    if (!productPrice.trim() || isNaN(productPrice) || parseFloat(productPrice) <= 0) {
      errors.price = 'Enter a valid price for the product';
    }

    if (!productImage.trim()) {
      errors.image = 'Product image URL is required';
    }

    if (!productDescription.trim()) {
      errors.description = 'Product description is required';
    }

    return errors;
  };

  return (
    <Fragment>
      <button onClick={() => handleNavigation("ListProducts")}>
        <span>Back</span>
      </button>
      <div className='form'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              placeholder='Enter the name'
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="productPrice">Product Price:</label>
            <input
              type="text"
              id="productPrice"
              placeholder='Enter the price'
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
            {errors.price && <p className="error">{errors.price}</p>}
          </div>

          <div>
            <label htmlFor="productImage">Image URL:</label>
            <input
              type="text"
              id="productImage"
              placeholder='Enter the URL'
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />
            {errors.image && <p className="error">{errors.image}</p>}
          </div>

          <div>
            <label htmlFor="productDescription">Product Description:</label>
            <textarea
              id="productDescription"
              value={productDescription}
              placeholder='Enter the description'
              onChange={(e) => setProductDescription(e.target.value)}
            />
            {errors.description && <p className="error">{errors.description}</p>}
          </div>
          <div className='form__container-buttons'>
            <button type="submit">
              <span>Save Product</span>
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateProduct;
