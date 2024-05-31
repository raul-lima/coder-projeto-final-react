import "./App.scss";
import { Navigation } from "./router/navigation/Navigation";
import { Home } from "./router/home/Home";
import { useState } from "react";
import { Item } from "./components/item/Item";
import { Shop } from "./router/shop/Shop";

export function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Item />
      <Shop />
    </>
  );
}
