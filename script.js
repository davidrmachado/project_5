const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const displayItensList = async (product) => {
  const productList = await fetchProducts(product);
  productList.forEach((item) => {    
    const eachItem = createProductItemElement({
      sku: item.id,
      name: item.title,
      image: item.thumbnail,
    });
  document.querySelector('.items').appendChild(eachItem);
  });
};

const addItemToCart = async (product) => {
  const productList = await fetchProducts(product);
  document.querySelectorAll('.item__add').forEach((button) => {
    button.addEventListener('click', (event) => {
      const itemSku = getSkuFromProductItem(event.target.parentElement);
      const eachItem = {
        sku: getSkuFromProductItem(event.target.parentElement),
        name: productList.find(({ id }) => id === itemSku).title,
        salePrice: productList.find(({ id }) => id === itemSku).price,
      };
      const cartList = document.querySelector('ol');
      cartList.appendChild(createCartItemElement(eachItem));
    });
  });
};

window.onload = () => { 
  displayItensList('computador');
  addItemToCart('computador');
};
