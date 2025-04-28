export const initialProductsState = {};

export const productsReducer = (
  state = initialProductsState,
  { type, payload }
) => {
  switch (type) {
    // case ACTION_TYPE.EDIT_TODO:
    //   return { ...state, title: payload };
    default:
      return state;
  }
};
