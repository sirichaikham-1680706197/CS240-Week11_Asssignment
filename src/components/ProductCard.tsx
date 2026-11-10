import type { ProductData } from "../types/Product";

interface ProductCardProps {
  product: ProductData;
  onBuy: () => void;
}

// การ์ดสินค้าเดิมจาก Week 10 เพิ่ม callback สำหรับส่งสินค้าเข้าตะกร้า
function ProductCard({ product, onBuy }: ProductCardProps) {
  const { name, description, price, image } = product;

  return (
    <article className="product-card group">
      <div className="product-image-wrap">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-content">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="product-price">฿{price.toLocaleString("th-TH")}</span>
          <button type="button" className="buy-button" onClick={onBuy}>Buy Now</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
