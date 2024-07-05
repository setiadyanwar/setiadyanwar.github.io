const products = [
  {
    id: "1",
    name: "Product 1",
    description: "This is a description of product 1.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Product 2",
    description: "This is a description of product 2.",
    image: "https://via.placeholder.com/150",
  },
];

function showProductDetail(element) {
  const productId = element.getAttribute("data-id");
  const product = products.find((p) => p.id === productId);
  if (product) {
    document.getElementById("products").classList.add("hidden");
    document.getElementById("product-detail").classList.remove("hidden");
    document.getElementById("detail-content").innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover mb-4">
      <h3 class="text-2xl font-semibold mb-2">${product.name}</h3>
      <p class="text-gray-600">${product.description}</p>
    `;
  }
}

function hideProductDetail() {
  document.getElementById("products").classList.remove("hidden");
  document.getElementById("product-detail").classList.add("hidden");
}