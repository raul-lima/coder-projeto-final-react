import "./App.scss";
import { Navigation } from "./router/navigation/Navigation";
import { Home } from "./router/home/Home";
import { useState } from "react";
import { Item } from "./components/item/Item";

export function App() {
  return (
    <>
      <Navigation />
      <Home />
      <Item />
    </>
  );
}
