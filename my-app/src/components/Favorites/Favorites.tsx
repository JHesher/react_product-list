import React from 'react';
import { useGlobalState } from '../../initialState/initialState';
import { ProductCard } from '../ProductCard';
import './Favorites.scss';
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { NavLink } from 'react-router-dom';

const ItemRenderer = ({ index, style, data }: ListChildComponentProps) => {
  console.log('data', data);
return (
  <div style={style}>
    <ProductCard product={data[index]} type={'favorites'} />
  </div>
)
};

export const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useGlobalState('favorites');
  console.log('favorites', favorites);
  return (
    <div className="Favorites">
      <h2 className="Favorites__title">
        Favorites
        {/* <ProductCard /> */}
      </h2>
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="Grid"
            itemCount={favorites.length}
            height={height}
            width={width}
            // onItemsRendered={favorites}
            itemSize={130}
          >
            {({ data, index, style }) => {
              return (
                <NavLink
                  to={`/product-page?id=${favorites[index].id}`}
                  style={style}
                >
                  <ProductCard product={favorites[index]} type={'favorites'} />
                </NavLink >
              );
            }}
            {/* {ItemRenderer} */}
          </List>
        )}
      </AutoSizer>
      {/* <>
        {favorites.map(item => (
          <li key={item.id}>
            <ProductCard product={item} type={'favorites'} />
          </li>
        ))}
      </> */}
    </div>
  );
};
