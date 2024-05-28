import { Category } from "../category/Category";
import "./Categories.scss";
export function Categories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return <Category category={category} key={category.title} />;
      })}
    </div>
  );
}
