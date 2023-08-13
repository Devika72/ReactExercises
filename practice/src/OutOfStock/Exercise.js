import { useState } from "react";
import "./App.css";

const itemList = [
  {
    itemId: 1,
    itemName: "Bread",
    itemPrice: 20,
    avalQty: 2
  },
  {
    itemId: 2,
    itemName: "Butter",
    itemPrice: 32,
    avalQty: 0
  },
  {
    itemId: 3,
    itemName: "Milk",
    itemPrice: 21,
    avalQty: 10
  },
  {
    itemId: 4,
    itemName: "Eggs",
    itemPrice: 45,
    avalQty: 10
  },
  {
    itemId: 5,
    itemName: "Maida",
    itemPrice: 18,
    avalQty: 10
  }
];

// function List({ id, name, price, qty, setCartItem }) {
function List({ item, setCartItem, cartItem }) {
  const [isadded, setIsadded] = useState(false);
  return (
    <li className="productInfo">
      <div>
        {item.itemName}: Rs.
        <span>
          <strong>{item.itemPrice}</strong>
        </span>
      </div>
      <AddToCart
        item={item}
        setCartItem={setCartItem}
        isadded={isadded}
        setIsadded={setIsadded}
        cartItem={cartItem}
      />
    </li>
  );
}

function TotalCartValue({ cartItem }) {
    let total = 0;
    if (cartItem.length) {
      total = cartItem.reduce((acc, item) => acc + item.itemPrice * item.itemQty, 0);
    }
  
    return (
      <strong>
        {total}
      </strong>
    );
  }
  

function Cart({ cartItem }) {
  return (
    <div>
      <h1>Your Cart</h1>
      <div>
        <span>
          Total Cart Price: <TotalCartValue cartItem={cartItem} />
        </span>
      </div>
      <ul>
        {cartItem.map((item) => {
          return (
            <li className="productInfo" key={item.itemId}>
              <div>
                {item.itemName}: Rs.
                <span>
                  <strong>{item.itemPrice}</strong>
                </span>
              </div>
              <div>Added Qty: {item.itemQty}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AddToCart({ item, setCartItem, isadded, setIsadded, cartItem }) {
  function greyOutofstock(qty, minqty, buttonToDisable, listItem) {
    if (qty <= minqty) {
      buttonToDisable.disabled = true;
      listItem.style.color = "grey";
    }
  }

  return (
    <button
      onClick={(e) => {
        if (isadded) {
          let newCartItems = cartItem.map((citem) => {
            if (citem.itemId === item.itemId) {
              greyOutofstock(
                citem.avalQty,
                1,
                e.target,
                e.target.parentElement
              );
              return {
                itemId: item.itemId,
                itemName: citem.itemName,
                itemPrice: citem.itemPrice,
                itemQty: citem.itemQty + 1,
                avalQty: citem.avalQty - 1
              };
            } else {
              return citem;
            }
          });
          setCartItem(newCartItems);
        } else {
          if (item.avalQty <= 0) {
            greyOutofstock(item.avalQty, 0, e.target, e.target.parentElement);
            return;
          }
          setCartItem((cartItem) =>
            cartItem.concat({
              itemId: item.itemId,
              itemName: item.itemName,
              itemPrice: item.itemPrice,
              itemQty: 1,
              avalQty: item.avalQty - 1
            })
          );
          setIsadded(true);
        }
      }}
    >
      Add to Cart
    </button>
  );
}

export function Exercise() {
  const [cartItem, setCartItem] = useState([]);

  return (
    <div className="Exercise13">
      <h1>Products</h1>
      <ul>
        {itemList.map((item) => {
          return (
            <List
              key={item.itemId}
              item={item}
              setCartItem={setCartItem}
              cartItem={cartItem}
            />
          );
        })}
      </ul>
      <hr />
      <Cart cartItem={cartItem} />
    </div>
  );
}
