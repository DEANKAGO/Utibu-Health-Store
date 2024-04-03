import {products} from '../utibuData/data';

export const checkItemsInStock = (name: string) => {
  return products.map(item => item.name === name).length;
};
