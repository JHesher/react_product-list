import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGlobalState } from '../../initialState/initialState';
import ReactImageMagnify from 'react-image-magnify';
import './ProductCard.scss';

type Props = {
  product: Product | null,
  type: string
}

export const ProductCard: React.FC<Props> = ({ product, type }) => {
  const [favorites, setFavorites] = useGlobalState('favorites');
  const handleCheck = (product: Product) => {
    if (favorites.find(item => item.id === product.id)) {
      setFavorites(favorites.filter(item => item.id !== product.id));
    } else {
      setFavorites([
        ...favorites,
        product
      ]);
    }
  }

  return (
    <div
      className={`ProductCard ProductCard--${type} ${favorites.find(item => item.id === product?.id) && 'ProductCard__like'}`}
    >
      {product && (
        <Card>
          {type === 'productPage' ? (
            <ReactImageMagnify {...{
              smallImage: {
                alt: `${product.name}`,
                isFluidWidth: true,
                src: `https://testbackend.nc-one.com${product?.src}`
              },
              largeImage: {
                src: `https://testbackend.nc-one.com${product?.src}`,
                width: 1200,
                height: 1200
              }
            }} />
          ) : (
            <CardMedia
              component="img"
              height="225"
              image={`https://testbackend.nc-one.com${product.src}`}
              alt={product.name}
            /> 
          )}
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
                className='ProductCard__like'
                onClick={() => handleCheck(product)}
              />
            </CardActions>
          </Box>
        </Card>
      )}
    </div>
  );
}
