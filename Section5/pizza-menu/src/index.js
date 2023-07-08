import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

const App = () => {
  const x = 10;
  console.log(x);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};
const Header = () => {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  return (
    <header className={"header"}>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};
const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/*<Pizza*/}
      {/*  name="Pizza Spinaci"*/}
      {/*  ingredient="Tomato, mozarella, spinach, and ricotta cheese"*/}
      {/*  photoName="pizzas/spinaci.jpg"*/}
      {/*  price="12"*/}
      {/*/>*/}
      {pizzaData.map((pizza) => {
        return (
          <Pizza
            name={pizza.name}
            ingredient={pizza.ingredients}
            photoName={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        );
      })}
    </main>
  );
};

const Pizza = (props) => {
  return (
    <div className="pizza">
      <img src={props.photoName} alt="spinaci" />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredient}</p>
        <span>{props.price}</span>
      </div>
    </div>
  );
};
const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  if (hour >= openHour && hour <= closeHour) {
    console.log("We're currently open!");
  } else console.log("We're currently closed!");
  return (
    <footer className="footer">
      <br />
      {new Date().toLocaleDateString()} We're currently open!{" "}
    </footer>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
