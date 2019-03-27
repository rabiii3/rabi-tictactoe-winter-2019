import { getOneFruit } from '../request';
import { reduce, times } from 'ramda';

export const CELL_FRUIT_LOADED = 'CELL_FRUIT_LOADED';

export const loadFruits = () => dispatch => {
  const promises = times(index => dispatch(loadFruitUntillPaperPlane(index)), 9);
  return Promise.all(promises);
};

export const loadOneFruit = index => dispatch =>
  getOneFruit().then(fruit => {
    dispatch({
      type: CELL_FRUIT_LOADED,
      fruit,
      index,
    });
  });

const loadNFruit = (n, index) => dispatch => {
  const loaders = times(() => () => dispatch(loadOneFruit(index)), n);
  return reduce((acc, loader) => acc.then(() => loader()), Promise.resolve(), loaders);
};

const loadFruitUntillPaperPlane = index => dispatch => {
  return getOneFruit().then(fruit => {
    if (fruit.icon !== 'paper-plane') dispatch(loadFruitUntillPaperPlane(index));
    dispatch({
      type: CELL_FRUIT_LOADED,
      fruit,
      index,
    });
  });
};

/* const loadFruitUntillPaperPlane = index => dispatch => {
  return new Promise(resolve => {
    getOneFruit().then(fruit => {
      fruit.icon !== 'paper-plane'? dispatch(loadFruitUntillPaperPlane(index)) : resolve();
      dispatch({
        type: CELL_FRUIT_LOADED,
        fruit,
        index,
      });
    });
  })
};  */
