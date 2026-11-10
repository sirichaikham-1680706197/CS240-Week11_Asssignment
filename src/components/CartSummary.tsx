import type { CartItem } from "../types";

interface CartSummaryProps {
  items: CartItem[];
  onCheckout: () => void;
}

function CartSummary({ items, onCheckout }: CartSummaryProps) {
  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.amount, 0);

  return (
    <div className="cart-summary">
      <div className="summary-line"><span>จำนวนสินค้าทั้งหมด</span><strong>{totalAmount} ชิ้น</strong></div>
      <div className="summary-line total-line"><span>ราคารวมทั้งหมด</span><strong>฿{totalPrice.toLocaleString("th-TH")}</strong></div>
      <button type="button" className="checkout-button" onClick={onCheckout}>สั่งซื้อสินค้า / Checkout</button>
    </div>
  );
}

export default CartSummary;
