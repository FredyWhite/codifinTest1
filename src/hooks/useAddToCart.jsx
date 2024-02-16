import { useContext } from 'react';
import { contextShoppingCart } from '../context/ShoppingCartContext';
import { contextProducts } from '../context/ProductsContext';

const useAddToCart = () => {
  const { shoppingCart, setShoppingCart } = useContext(contextShoppingCart);
  const { handleGetProductId } = useContext(contextProducts)

  const handleAddToCart = (productId) => {
    if (shoppingCart.find((product) => product.id === productId && product) !== undefined) {
      const products = shoppingCart.map((product) => {
        return (product.id === productId) ? { ...product, quantity: product.quantity + 1 } : product;
      })
      setShoppingCart(products)
    } else {
      const product = handleGetProductId(productId);
      setShoppingCart([...shoppingCart, { ...product, quantity: product.quantity + 1 }]);
    }
  };
  return {
    handleAddToCart
  }
}

export default useAddToCart;