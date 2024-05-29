import { useState } from "react";
import "./Item.scss";

export function Item() {
  const [count, setCount] = useState(0);

  return (
    <div className="item-card">
      <img src="/src/assets/sorvete.jpg" alt="Item" className="item-image" />
      <h2>Sorvete de morango</h2>
      <h3>R$ 10,00</h3>
      <div className="item-actions">
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <span className="item-quantity">{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
