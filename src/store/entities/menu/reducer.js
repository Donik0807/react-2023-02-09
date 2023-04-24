import { normalizedProducts } from "../../../constants/normalized-fixtures";

const initialState = {
  entities: normalizedProducts.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {}),
  ids: normalizedProducts.map(({ id }) => id),
};

export const menuReducer = (state = initialState, action) => state;