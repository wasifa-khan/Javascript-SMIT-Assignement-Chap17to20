const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Welcome to ABC Bakery.What do you want to order sir/maam : ");

let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  document.write("cookie is available at index 2 in our bakery");
} else {
  document.write("We are sorry. pastry is not available in our bakery");
}
