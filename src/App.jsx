import React, { useContext } from 'react';
import ListProducts from './components/ListProducts';
import CreateProduct from './components/CreateProduct';
import DetailsProduct from './components/DetailsProduct';
import ShoppingCart from './components/ShoppingCart';
import { contextNavigationPage } from './context/NavigationPageContex'

const App = () => {
  const { currentComponent } = useContext(contextNavigationPage);

  const renderComponent = () => {
    switch (currentComponent) {
      case 'createProduct':
        return <CreateProduct />;
      case 'ListProducts':
        return <ListProducts />;
      case 'detailsProduct':
        return <DetailsProduct />;
      case 'shoppingCart':
        return <ShoppingCart />;
      default:
        return <ListProducts />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default App;