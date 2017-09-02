//No more var - let, const
//Fat arrow functions
//Object literal value shorthand notation
//String template literal (`<div>`)

//"let" allows you to manipulate that variable later on
//"const" - keeps your variable static...alleviates human error

const allProducts = []; //define products in array

const product1 = {
	name: "Mop Attire",
	imagePath: "./images/mopAttire.jpg",
	imageAlt: "Product: Mop Attire",
	description: "This is a really good description of our product. It really sells it. It's the best.",
	price: 3000,
	soldOut: false
};

const product2 = {
  name: "Taco Suit",
  imagePath: "./images/tacoSuit.jpg",
  imageAlt: "Product: Taco Suit",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 25,
  soldOut: false
};

const product3 = {
  name: "Neck Decoration",
  imagePath: "./images/neckDecoration.jpg",
  imageAlt: "Product: Neck Decoration",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 750,
  soldOut: false
};

const product4 = {
  name: "Head Ornament",
  imagePath: "./images/headOrnament.jpg",
  imageAlt: "Product: Head Ornament",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 3.22,
  soldOut: true
};

const product5 = {
  name: "Boob Hat",
  imagePath: "./images/boobHat.jpg",
  imageAlt: "Product: Boob Hat",
  description: "This is a really good description of our product. It really sells it. It's the best.",
  price: 36,
  soldOut: true
};

allProducts.push(product1) //push products into array
allProducts.push(product2)
allProducts.push(product3)
allProducts.push(product4)
allProducts.push(product5)

const addNewProduct = (name, imagePath, imageAlt, description, price, soldOut, userRating) => {
  const newProduct = {name, imagePath, imageAlt, description, price, soldOut, userRating};
  allProducts.push(newProduct);
}

addNewProduct("Butt Paste", "https://upload.wikimedia.org/wikipedia/en/e/e8/Boudreauxs_Butt_Paste.jpg", "picture of cream", "this is butt paste", 4.99, true, "5 stars");

const productContainer = document.getElementById("product-container"); //defining the html element


const buildDomString = (product) => {
  let domString = "";

    domString += '<section class="product">';
    domString +=   '<div class="title">';
    domString +=      '<h2>' + product.name + '</h2>';
    domString +=   '</div>';
    domString +=   '<div class="image">';
    domString +=       '<img src="'+ product.imagePath +'" alt="' + product.imageAlt +'>';
    domString +=   '</div>';
    domString +=   '<div class="description">';
    domString +=       '<p>' + product.description + '</p>';
    domString +=       '<h6>$' + product.price +'</h6>';
    domString +=    '</div>';
    if (product.soldOut) {
      domString += '<div class="sold-out">';
      domString += '<img src="./images/soldOut.png" alt="Sold Out">';
      domString += '</div>';
    }
    domString +=  '</section>';
    return domString;
}

const printProductArrayToDom = (productArray) => { //runs the loop that is then calling the buildDomString function. 
  for (let i = 0; i < productArray.length; i++) {
    const currentProduct = allProducts[i];
    const productDomString = buildDomString(currentProduct);
    productContainer.innerHTML += productDomString;
  }
}

printProductArrayToDom(allProducts);

let selectedCard;  

document.getElementById("product-container").addEventListener("click", (event) => {
  changeBorder(event);
  printSelectedDescription();
})

const changeBorder = (event) => {
  if (event.target.classList.contains("title")){
    selectedCard = event.target.parentNode;
  } else if (event.target.parentNode.parentNode.classList.contains("product")){
  selectedCard = event.target.parentNode.parentNode;
} else if (event.target.classList.contains("product")) {
  selectedCard = event.target;
}

selectedCard.classList.add("border-funsies");
}

const printSelectedDescription = () => {
  const description = selectedCard.childNodes;
  console.log(description);
}
















