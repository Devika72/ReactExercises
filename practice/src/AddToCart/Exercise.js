import { useState } from "react";
import "./App.css";


const itemsList = [
  { id: "id1001", title: "Maggie", price: 12, qtyAvl: 0, qtyCart: 0 },
  { id: "id1002", title: "Butter", price: 30, qtyAvl: 10, qtyCart: 0 },
  { id: "id1003", title: "Sugar", price: 20, qtyAvl: 10, qtyCart: 0 },
  { id: "id1004", title: "Eggs", price: 40, qtyAvl: 10, qtyCart: 0 }
];

function ShopItem({
  id,
  title,
  index,
  price,
  cartItems,
  setCartItems,
  qtyAvl,
  qtyCart
}) {
  const [isAdded, setAddedFlag] = useState(false);

  function addToCart({ item }) {
    if (isAdded) {
      setCartItems({
        ...cartItems,
        [id]: {
          title,
          price,
          qtyAvl: qtyAvl - 1,
          qtyCart: cartItems[id].qtyCart + 1
        }
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: {
          title,
          price,
          qtyAvl: qtyAvl - 1,
          qtyCart: 1
        }
      });
      setAddedFlag(true);
    }
    itemsList[index].qtyAvl = itemsList[index].qtyAvl - 1;
  }
  return (
    <li key={id}>
      <div>
        {title} : Rs.{price}
      </div>
      <button
        onClick={(e) => addToCart({ id, title, price, qtyAvl, qtyCart })}
        enabled={qtyAvl ? false : true}
      >
        Add to Cart
      </button>
    </li>
  );
}

function Cart({ cartItems }) {
  console.log(cartItems);
  function cartItemsPrint() {
    const ids = Object.keys(cartItems);
    return ids.map((id) => {
      return (
        <li key={id}>
          <div>
            {cartItems[id].title}:{cartItems[id].price}
          </div>
          <div>Qty Added:{cartItems[id].qtyCart}</div>
        </li>
      );
    });
  }
  return (
    <div style={{ backgroundColor: "lightblue" }}>
      <h1>Cart</h1>
      <ul>{cartItemsPrint()}</ul>
    </div>
  );
}

function Shop() {
  const [cartItems, setCartItems] = useState({});
  return (
    <div>
      <div style={{ backgroundColor: "pink" }}>
        <h1>Shop Now</h1>
        <ul>
          {itemsList.map(({ id, title, price, qtyAvl, qtyCart }, index) => {
            return (
              <ShopItem
                key={id}
                id={id}
                index={index}
                title={title}
                price={price}
                cartItems={cartItems}
                setCartItems={setCartItems}
                qtyAvl={qtyAvl}
                qtyCart={qtyCart}
              />
            );
          })}
        </ul>
      </div>
      <Cart cartItems={cartItems} />
    </div>
  );
}

export function Exercise() {
  return (
    <div className="Exercise7">
        <h1>Add To Cart</h1>
      <Shop />
    </div>
  );
}
