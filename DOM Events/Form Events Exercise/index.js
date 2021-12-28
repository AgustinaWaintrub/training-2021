// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
let ul = document.querySelector('#list');
 
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const productName = form.elements.product;
    const productQuantity = form.elements.qty;
    let list = document.createElement('li');
    list.innerText = `${productName.value} ${productQuantity.value}`;
    ul.appendChild(list);
    productName.value = "";
    productQuantity.value = "";
});