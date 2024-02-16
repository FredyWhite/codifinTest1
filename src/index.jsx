import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsContext } from './context/ProductsContext';
import { NavigationPageContext } from './context/NavigationPageContex';
import { ShoppingCartContext } from './context/ShoppingCartContext';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationPageContext>
      <ProductsContext>
        <ShoppingCartContext>
          <App />
        </ShoppingCartContext>
      </ProductsContext>
    </NavigationPageContext>
  </React.StrictMode>
);