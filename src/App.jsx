import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} data={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ data }) {
  const pizza = data;
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : " "}`}>
      <img src={pizza.photoName} alt={`Pizza${pizza.name}`} />
      <h3>{pizza.name}</h3>
      <p>{pizza.ingredients}</p>
      <span> {pizza.soldOut ? "Sold Out" : pizza.price} </span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {isOpen ? (
        <div className="order">
          <p>
            We're open until {closeHour}:00. Come visit us or order online.{" "}
          </p>
          <button
            className="btn"
            onClick={() => alert("Order is unavailable at the moment.")}
          >
            Order
          </button>
        </div>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 - {closeHour}:00{" "}
        </p>
      )}
    </footer>
  );
}

export default App;
