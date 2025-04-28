import { ACTION_TYPE } from "../actions";
export const initialProductState = {
  id: "",
  title: "",
  imageUrl: "",
  description: "",
  polyphony: 0,
  colors: [],
  power: 0,
  timbres: 0,
  categories: [],
  available: 1,
  specifications: "",
  unusualFeature: "",
  sizes: [],
};
// { type, payload }
export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_PRODUCT_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
