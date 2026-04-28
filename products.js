var products=[
  {
    productId: 1,
    productName: "Laptop",
    productPrice: 50000,
    productImage: "https://example.com/images/laptop.jpg"
  },
  {
    productId: 2,
    productName: "Mobile",
    productPrice: 20000,
    productImage: "https://example.com/images/mobile.jpg"
  },
  {
    productId: 3,
    productName: "Headphones",
    productPrice: 2000,
    productImage: "https://example.com/images/headphones.jpg"
  }
];
function getProducts(){
    return products;
}
module.exports={getProducts};
