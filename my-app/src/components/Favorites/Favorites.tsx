import React from 'react';
import { useGlobalState } from '../../initialState/initialState';
import { ProductCard } from '../ProductCard';
import './Favorites.scss';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from 'react-window';
import { NavLink } from 'react-router-dom';

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useGlobalState('favorites');
  const styles = {
    marginBottom: '20px',
  };
  console.log('favorites', favorites);
  return (
    <div className="Favorites">
      <h2 className="Favorites__title">
        Favorites
      </h2>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="Grid"
            itemCount={favorites.length}
            height={height}
            width={width}
            itemSize={130}
          >
            {({ data, index, style }) => {
              return (
                <NavLink
                  className="Favorites__item"
                  to={`/product-page?id=${favorites[index].id}`}
                  style={styles}
                >
                  <ProductCard product={favorites[index]} type={'favorites'} />
                </NavLink >
              );
            }}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};
