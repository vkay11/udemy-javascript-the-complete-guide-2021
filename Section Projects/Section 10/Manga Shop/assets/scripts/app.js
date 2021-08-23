class Manga {
    title;
    author;
    imageUrl;
    price;

    constructor(title, author, image, price) {
        this.title = title;
        this.author = author;
        this.imageUrl = image;
        this.price = price;
    }
}

class ElementAttribute {
  constructor(attributeName, attributeValue) {
    this.name = attributeName;
    this.value = attributeValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }
  createRootElement(tag, cssClasses, attributes) {
    const rootElement = document.createElement(tag);
    if (cssClasses) {
      rootElement.className = cssClasses;
    }
    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}


class ShoppingCart extends Component {
  items = [];

  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: ₹${this.totalAmount.toFixed(2)}</h2>`;
  }

  get totalAmount() {
    const sum = this.items.reduce((prevValue, currentItem) => {
      return prevValue + currentItem.price;
    }, 0);
    return sum;
  }

  constructor(hookId) {
    super(hookId);
  }

  addManga(manga) {
    const updatedItems = [...this.items];
    updatedItems.push(manga);
    this.cartItems = updatedItems;
  }

  render() {
    const cartElement = this.createRootElement('section', 'cart');
    cartElement.innerHTML = `
      <h2>Total: ₹${0}</h2>
      <button>Order Now</button> 
    `;
    this.totalOutput = cartElement.querySelector('h2');
    return cartElement;
  }
}


class MangaItem extends Component {
  constructor(manga, renderHookId) {
    super(renderHookId);
    this.manga = manga;
  }

  addToCart() {
    App.addMangaToCart(this.manga);
  }

  render() {
    const mangaElement = this.createRootElement('li', 'product-item');
      mangaElement.innerHTML = `
        <div>
          <img src="${this.manga.imageUrl}" alt="${this.manga.title}" >
          <div class="product-item__content">
            <h2>${this.manga.title}</h2>
            <h3>${this.manga.author}</h3>
            <p>₹${this.manga.price}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;

      const addToCartBtn = mangaElement.querySelector('button');
      addToCartBtn.addEventListener('click', this.addToCart.bind(this));

      return mangaElement;      
  }
}


class MangaList extends Component{
  mangas = [
    new Manga(
      'Naruto',
      'Mashashi Kishimoto',
      'https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/4826308-72.jpg',
      699
    ),
    new Manga(
      'Bleach',
      'Tite Kubo',
      'https://images-na.ssl-images-amazon.com/images/I/81JTNoJKKaL.jpg',
      699
    )
  ];

  constructor(renderHookId) {
    super(renderHookId);
  }

  render() {
    this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')]);
    for (const manga of this.mangas) {
      const mangaItem = new MangaItem(manga, 'prod-list');
      mangaItem.render();
    }
  }

}

class Shop {
  render() {
    this.cart = new ShoppingCart('app');
    this.cart.render();
    const mangaList = new MangaList('app');
    mangaList.render();
  }
}

class App {
  static cart;

  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addMangaToCart(manga) {
     this.cart.addManga(manga);
  }
}


App.init();