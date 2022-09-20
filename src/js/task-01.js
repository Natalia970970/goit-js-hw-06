// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5


const categories = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories:", categories.length);
categories.forEach((category) => {
    const title = category.querySelector("h2");
    const items = category.querySelectorAll("ul li");
    console.log("Category:", title.textContent);
    console.log("Elements:", items.length);
});
