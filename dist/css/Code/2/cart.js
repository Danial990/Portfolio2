import genrateElement from "./generateElement.js";
import render from "./render.js";
const container = genrateElement('div', { class: 'container' });

function genrateCart(name, age) {

    const cart = genrateElement('div', { class: 'cart' },
        genrateElement('span', null, `name : ${name}`),
        genrateElement('span', null, `age : ${age}`)
    );

    return cart;
}

const userData = [
    { name: 'Danial', age: 32 },
    { name: 'Aria', age: 45 },
    { name: 'Barzan', age: 67 }
]

userData.forEach(data => {
    render(container, (genrateCart(data.name, data.age)))
});

export default container;