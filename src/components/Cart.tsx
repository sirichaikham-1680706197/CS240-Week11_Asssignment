import type { CartItem } from "../types";
import CartItemRow from "./CartItemRow";
import CartSummary from "./CartSummary";

interface CartProps {
  items: CartItem[];
  onChangeAmount: (id: number, amount: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

function Cart({ items, onChangeAmount, onRemove, onCheckout }: CartProps) {
  return (
    <section className="cart-section" aria-label="Product Cart">
      <div className="cart-heading">
        <h2>Product Cart</h2>
        {items.length > 0 && <span className="cart-badge">{items.length} รายการ</span>}
      </div>
      {items.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h3>ตะกร้าสินค้ายังว่าง</h3>
          <p>เลือกสินค้าที่ต้องการจากรายการด้านบน</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <CartItemRow key={item.id} item={item} onChangeAmount={onChangeAmount} onRemove={onRemove} />
            ))}
          </div>
          <CartSummary items={items} onCheckout={onCheckout} />
        </>
      )}
    </section>
  );
}

export default Cart;
