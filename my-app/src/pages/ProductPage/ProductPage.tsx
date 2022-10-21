import React, { useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import './ProductPage.scss';
import { useGlobalState } from '../../initialState/initialState';
import { fetchProduct } from '../../api/api';

export const ProductPage: React.FC = () => {
  const [product, setProduct] = useGlobalState('product');
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const loadProduct = async () => {
    if (productId) {
      const productsFromServer = await fetchProduct(productId);

      setProduct(productsFromServer.data);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <div className="ProductPage">
      <ProductCard product={product} type={'productPage'} />
    </div>
  );
};
