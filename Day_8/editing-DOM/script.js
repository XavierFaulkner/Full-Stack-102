const shoppingCartList = document.getElementById('list').children;
const shoppingCart = document.querySelector('ul');

shoppingCartList[1].innerHTML = "Granny Smith Apples";
shoppingCartList[3].remove();

const newLi = document.createElement('li');
newLi.innerHTML = "Kombucha";

shoppingCart.appendChild(newLi);

const newItems = ['protein bars', 'almonds', 'peanut butter'];

shoppingCart.innerHTML = "";

for(let i = 0; i <newItems.length; i++) {
    shoppingCart.innerHTML += ("<li>" + newItems[i] + "</li>");
}

shoppingCartList[1].className = "important";

console.log(shoppingCartList);