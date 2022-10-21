import React, { useEffect } from 'react';
import { ProductCard } from '../../components/ProductCard';
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { useGlobalState } from '../../initialState/initialState';
import './ProductListPage.scss';
import { NavLink } from 'react-router-dom';
import { fetchProducts } from '../../api/api';

export const ProductListPage: React.FC = () => {
  const [products, setProducts] = useGlobalState('products');

  const loadProducts = async () => {
    const productsFromServer = await fetchProducts();

    setProducts(productsFromServer.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="ProductListPage">
      {products.length !== 0 && (
        <AutoSizer>
          {({ height, width }) => (
            <Grid
              className="Grid"
              columnCount={4}
              rowCount={10}
              columnWidth={262}
              rowHeight={350}
              height={height}
              width={width}
              itemData={products}
            >
              {ItemRenderer}
            </Grid>
          )}
        </AutoSizer>
      )}
    </div>
  );
};


const ItemRenderer = ({ columnIndex, rowIndex, style, data }: GridChildComponentProps) => {
  const styles = {
    ...style,
    left: columnIndex === 0
      ? style.left : Number(style.left) + columnIndex * 30,
    top: rowIndex === 0
      ? style.top : Number(style.top) + rowIndex * 70,
    margin: '5%',
  };

  return (
    <div
      // to={`/product-page?id=${data[rowIndex + columnIndex].id}`}
      style={styles}
    >
      <ProductCard
        product={data[rowIndex + columnIndex]}
        type={'productsListPage'}
      />
    </div>
  )
};


