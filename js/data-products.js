import products from './data/products.js';

// console.log();

// const product = {
//     name: 'Cервоприводы',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellat eligendi dolore non incidunt, quos cum tempore,  ex eveniet similique?',
//     price: 2000,
//     available: true,
//     onSale: true,
   
// }

// const productEl = document.createElement('articale')
// productEl.classList.add('product')

// const nameEl = document.createElement('h2')
// nameEl.classList.add('product__name')
// nameEl.textContent = product.name

// const paragrDescrEl = document.createElement('p')
// paragrDescrEl.classList.add('product__descr')
// paragrDescrEl.textContent = product.description

// const paragrPriceEl = document.createElement('p')
// paragrPriceEl.classList.add('product__price')
// paragrPriceEl.textContent = `Цена: ${product.price}` 

// console.log(productEl);
// console.log(nameEl);
// console.log(paragrDescrEl);
// console.log(paragrPriceEl);

// productEl.append(nameEl, paragrDescrEl, paragrPriceEl)

const productsContainerEl = document.querySelector('.js-products')
// console.log(productsContainerEl);

const makeProductCard = ({name, description, price}) => {
    const productEl = document.createElement('articale')
productEl.classList.add('product')

const nameEl = document.createElement('h2')
nameEl.classList.add('product__name')
nameEl.textContent = name

const paragrDescrEl = document.createElement('p')
paragrDescrEl.classList.add('product__descr')
paragrDescrEl.textContent = description

const paragrPriceEl = document.createElement('p')
paragrPriceEl.classList.add('product__price')
paragrPriceEl.textContent = `Цена: ${price}` 

productEl.append(nameEl, paragrDescrEl, paragrPriceEl)
return productEl

}

// console.log(makeProductCard(products));
// console.log(makeProductCard(products[1]));
// console.log(makeProductCard(products[4]));

const elements = products.map(makeProductCard)


// console.log(elements);

productsContainerEl.append(...elements)
