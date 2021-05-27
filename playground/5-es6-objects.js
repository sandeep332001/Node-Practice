const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

const { label: productLabel, stock, rating = 5 } = product;
const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction("order", product);
