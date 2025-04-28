import { setProductData } from "./set-product-data";

export const loadProductAsync = (requestserver, productId) => (dispatch) => {
  requestserver("fetchProduct", productId).then((productData) =>
    dispatch(setProductData(productData.res))
  );
};
