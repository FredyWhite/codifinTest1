import { useState, useEffect } from 'react';

const useProductSearch = (initialProducts) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setFilteredProducts(initialProducts)
  }, [initialProducts])

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredProducts = initialProducts.filter(product =>
      product.name.toLowerCase().includes(term)
    );
    setFilteredProducts(filteredProducts);
  };

  const handleSort = () => {
    const sortedProducts = [...initialProducts].sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      return order * (a.price - b.price);
    });

    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setFilteredProducts(sortedProducts);
  };

  return {
    searchTerm,
    filteredProducts,
    sortOrder,
    handleSearch,
    handleSort,
  };
};

export default useProductSearch;