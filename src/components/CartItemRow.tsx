import type { CartItem } from "../types";

interface CartItemRowProps {
  item: CartItem;
  onChangeAmount: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
}

function CartItemRow({ item, onChangeAmount, onRemove }: CartItemRowProps) {
  return (
    <article className="cart-item-row">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-info">
        <h3>{item.name}</h3>
        <p>ราคาต่อชิ้น ฿{item.price.toLocaleString("th-TH")}</p>
        <div className="quantity-control">
          <button type="button" aria-label="ลดจำนวน" onClick={() => onChangeAmount(item.id, item.amount - 1)}>−</button>
          <input aria-label={`จำนวน ${item.name}`} type="number" min={1} value={item.amount}
            onChange={(e) => onChangeAmount(item.id, Number(e.target.value))} />
          <button type="button" aria-label="เพิ่มจำนวน" onClick={() => onChangeAmount(item.id, item.amount + 1)}>+</button>
        </div>
      </div>
      <div className="cart-item-total">
        <strong>฿{(item.price * item.amount).toLocaleString("th-TH")}</strong>
        <button type="button" className="remove-button" onClick={() => onRemove(item.id)}>ลบสินค้า</button>
      </div>
    </article>
  );
}

export default CartItemRow;
