# Week 11 Homework - Product Cart

ต่อยอดจาก Week 10 ของ Sirichai (SID 1680706197) โดยคงข้อมูลสินค้า รูปสินค้า และรูปแบบ Product Cards เดิม พร้อมเพิ่มระบบ Product Cart ตาม Assignment Week 11

## วิธีเปิดโปรเจกต์
1. ติดตั้ง Node.js
2. เปิด Terminal ในโฟลเดอร์นี้ แล้วรัน `npm install`
3. รัน `npm run dev` และเปิด URL ที่ Vite แสดง
4. ตรวจสอบก่อนส่งด้วย `npm run build`

## ฟังก์ชันที่เพิ่ม
- Buy Now เพิ่มสินค้าในตะกร้า (สินค้าซ้ำเพิ่มจำนวน)
- ปุ่ม + / − และช่องกรอกจำนวน (ขั้นต่ำ 1)
- ลบสินค้า
- คำนวณจำนวนรวมและราคารวมด้วย reduce()
- Conditional Rendering ตะกร้าว่าง/มีสินค้า และ Badge จำนวนรายการ
- Checkout แจ้งเตือนและล้างตะกร้า

State ของตะกร้าอยู่ที่ App.tsx เท่านั้น และส่ง callback ผ่าน Props ให้ Component ลูก
