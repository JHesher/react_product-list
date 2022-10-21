import { createGlobalState } from 'react-hooks-global-state';
interface InitialState {
  products: Product[] | [],
  product: Product | null,
  favorites: Product[] | []
};

const initialState: InitialState = {
  products: [],
  product: null,
  favorites: []
};
export const { useGlobalState } = createGlobalState(initialState);