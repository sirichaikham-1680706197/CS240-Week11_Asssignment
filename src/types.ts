import type { ProductData } from "./types/Product";

// Product ใช้ข้อมูลสินค้าเดิมจาก Week 10
export type Product = ProductData;

// CartItem คือสินค้าที่อยู่ในตะกร้า พร้อมจำนวนที่เลือก
export interface CartItem extends Product {
  amount: number;
}
