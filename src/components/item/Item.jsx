import "./Item.scss";

export function Item({ image, quantity }) {
  return (
    <div className="item-card">
      <img src={image} alt="Item" className="item-image" />
      <div className="item-actions">
        <button onClick={onRemove} disabled={quantity === 0}>
          -
        </button>
        <span className="item-quantity">{quantity}</span>
        <button onClick={onAdd}>+</button>
      </div>
    </div>
  );
}
