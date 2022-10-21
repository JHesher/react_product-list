import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalState } from '../../initialState/initialState';
import './ProductCard.scss';

type Props = {
  product: Product | null,
  type: string
}

export const ProductCard: React.FC<Props> = ({ product, type }) => {
  const [favorites, setFavorites] = useGlobalState('favorites');
  return (
    <div
      className={`ProductCard ProductCard--${type}`}
    >
      {product && (
        <Card>
          <CardMedia
            component="img"
            height="225"
            image={`https://testbackend.nc-one.com${product.src}`}
            alt={product.name}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography>
                {product.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Typography>
                {`$ ${product.price}`}
              </Typography>
              <FavoriteIcon
                className={`${favorites.find(item => item.id === product.id) && 'ProductCard__like'}`}
                onClick={() => setFavorites([...favorites, product])}
              />
            </CardActions>
          </Box>
        </Card>
      )}
    </div>
  );
}
