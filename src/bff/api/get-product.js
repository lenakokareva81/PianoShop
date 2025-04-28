import { transformProduct } from "../../transformers";

export const getProduct = async (productId) => {
  return fetch(`http://localhost:3005/product/${productId}`)
    .then((loadedProduct) => loadedProduct.json())
    .then((loadedProduct) => loadedProduct && transformProduct(loadedProduct));
};
