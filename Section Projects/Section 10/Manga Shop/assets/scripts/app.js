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

class ShoppingCart {
  items = [];

  render() {
    const CartElement = document.createElement('section');
    CartElement.innerHTML = `
      <h2>Total: ₹${0}</h2>
      <button>Order Now</button> 
    `;
    CartElement.className = 'cart';
    return CartElement;
  }
}


class MangaItem {
  constructor(manga) {
    this.manga = manga;
  }

  addToCart() {
    console.log(this.manga);
  }

  render() {
    const mangaElement = document.createElement('li');
      mangaElement.className = 'product-item';
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


class MangaList {
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

  constructor() {}

  render() {
    const mangaList = document.createElement('ul');
    mangaList.className = 'product-list';
    for (const manga of this.mangas) {
      const mangaItem = new MangaItem(manga);
      const mangaElement = mangaItem.render();
      mangaList.append(mangaElement);
    }
    return mangaList;
  }

}

class Shop {
  render() {
    const renderHook = document.getElementById('app');
    const cart = new ShoppingCart();
    const cartElement = cart.render();
    const mangaList = new MangaList();
    const mangaListElement = mangaList.render();

    renderHook.append(cartElement);
    renderHook.append(mangaListElement);
  }
}


const shop = new Shop();
shop.render();

