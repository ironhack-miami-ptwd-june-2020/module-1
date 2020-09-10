// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  // const priceValue = price
  const total = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = total;
  return total;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  const allProducts = document.querySelectorAll(".product");

  let subtotal = 0;
  // updateSubtotal(allProducts[0]);
  // updateSubtotal(allProducts[1]);
  allProducts.forEach((element) => {
    subtotal += updateSubtotal(element);
  });
  // console.log(subtotal);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span");
  total.innerText = subtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
