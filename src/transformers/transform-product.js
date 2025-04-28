export const transformProduct = (dbProduct) => ({
  id: dbProduct.id,
  title: dbProduct.title,
  imageUrl: dbProduct.image_url,

  description: dbProduct.description,
  unusualFeature: dbProduct.unusual_feature,
  price: dbProduct.price,
  polyphony: dbProduct.polyphony,
  colors: dbProduct.colors,
  power: dbProduct.power,
  timbres: dbProduct.timbres,
  categories: dbProduct.categories,
  available: dbProduct.available,
  specifications: dbProduct.pecifications,

  sizes: dbProduct.sizes,
});
