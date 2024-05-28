import { Categories } from "../../components/categories/Categories";

const categories = [
  {
    id: 1,
    title: "Lanches",
    imageUrl: "/src/assets/lanches.jpg",
  },
  {
    id: 2,
    title: "Grelhados",
    imageUrl: "/src/assets/grelhados.jpg",
  },
  {
    id: 3,
    title: "Pizzas",
    imageUrl: "/src/assets/pizzas.jpg",
  },
  {
    id: 4,
    title: "Bebidas",
    imageUrl: "/src/assets/bebidas.jpg",
  },
  {
    id: 5,
    title: "Sobremesas",
    imageUrl: "/src/assets/sobremesas.jpg",
  },
];

export function Home() {
  return (
    <div>
      <Categories categories={categories} />
    </div>
  );
}
