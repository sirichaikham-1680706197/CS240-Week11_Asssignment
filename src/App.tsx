import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import type { ProductData } from "./types/Product";
import type { CartItem } from "./types";

function App() {
  const products: ProductData[] = [
    {
      id: 1,
      name: "west coast chopper",
      description:
        "แบรนด์ไลฟ์สไตล์สไตล์ไบเกอร์ โดดเด่นด้วยดีไซน์เท่ ดุดัน สะท้อนเอกลักษณ์ของวัฒนธรรมมอเตอร์ไซค์",
      price: 2990,
      image: "./products/1.jpg",
    },
    {
      id: 2,
      name: "west coast chopper",
      description:
        "สินค้าแฟชั่นจาก West Coast Choppers ที่ผสมผสานความเท่แบบไบเกอร์เข้ากับดีไซน์ที่มีเอกลักษณ์",
      price: 4590,
      image: "./products/2.jpg",
    },
    {
      id: 3,
      name: "west coast chopper",
      description:
        "ไอเทมสไตล์ไบเกอร์จาก West Coast Choppers ดีไซน์โดดเด่น แข็งแกร่ง เหมาะสำหรับผู้ที่ชื่นชอบสตรีทแฟชั่น",
      price: 3290,
      image: "./products/3.jpg",
    },
    {
      id: 4,
      name: "west coast chopper",
      description: "สินค้าไลฟ์สไตล์ดีไซน์ดุดัน ถ่ายทอดความเป็นตัวตนของ West Coast Choppers เหมาะสำหรับคนรักสไตล์ไบเกอร์",
      price: 3890,
      image: "./products/4.jpg",
    },
    {
      id: 5,
      name: "ERGONOZ Monitor Arm TRAZER",
      description: "แขนจับจอมอนิเตอร์รุ่น TRAZER ปรับระดับและองศาหน้าจอได้อย่างยืดหยุ่น ช่วยจัดโต๊ะทำงานให้เป็นระเบียบและประหยัดพื้นที่",
      price: 6800,
      image: "/products/5.jpg",
    },
    {
      id: 6,
      name: "ERGONOZ Monitor Arm ARMOUR",
      description: "แขนจับจอมอนิเตอร์รุ่น ARMOUR ออกแบบมาเพื่อรองรับการติดตั้งจอภาพ ช่วยปรับตำแหน่งหน้าจอให้เหมาะกับสรีระและการใช้งาน",
      price: 6800,
      image: "/products/6.jpg",
    },
    {
      id: 7,
      name: "ERGONOZ INTEGRA ELECTRIC STANDING DESK",
      description: "โต๊ะทำงานปรับระดับไฟฟ้า INTEGRA สามารถปรับความสูงเพื่อสลับระหว่างการนั่งและยืนทำงาน ช่วยเพิ่มความยืดหยุ่นในการใช้งาน",
      price: 8500,
      image: "/products/7.jpg",
    },
    {
      id: 8,
      name: "ERGONOZ INTEGRA L-SHAPE ELECTRIC STANDING DESK",
      description: "โต๊ะทำงานปรับระดับไฟฟ้าทรงตัว L เพิ่มพื้นที่สำหรับวางอุปกรณ์หลายชิ้น พร้อมปรับความสูงเพื่อรองรับทั้งการนั่งและยืนทำงาน",
      price: 12000,
      image: "/products/8.jpg",
    },
        {
      id: 9,
      name: "MSI VECTOR 16 HX AI A2XWIG-078TH",
      description: "โน้ตบุ๊กเกมมิ่งประสิทธิภาพสูงจาก MSI มาพร้อมขุมพลัง Intel Core Ultra และกราฟิก NVIDIA GeForce RTX รองรับการเล่นเกมและงานประมวลผลหนัก",
      price: 82990,
      image: "/products/9.jpg",
    },
    {
      id: 10,
      name: "HP OMEN 16-AP0159AX",
      description: "โน้ตบุ๊กเกมมิ่ง HP OMEN ขนาด 16 นิ้ว ดีไซน์ทันสมัย มาพร้อมหน่วยประมวลผล AMD และกราฟิกแยก รองรับทั้งการเล่นเกมและการทำงาน",
      price: 45990,
      image: "/products/10.jpg",
    },
    {
      id: 11,
      name: "HP HYPERX OMEN 16-AP1035AX",
      description: "โน้ตบุ๊กเกมมิ่งจาก HP ตระกูล OMEN มาพร้อมประสิทธิภาพสำหรับการเล่นเกม การทำงานกราฟิก และการใช้งานมัลติทาสก์",
      price: 106990,
      image: "/products/11.jpg",
    },
    {
      id: 12,
      name: "ACER PREDATOR HELIOS NEO 16S AI PHN16S-71-76AZ",
      description: "โน้ตบุ๊กเกมมิ่ง Acer Predator ดีไซน์บางเฉียบ มาพร้อมเทคโนโลยี AI และประสิทธิภาพการประมวลผลระดับสูง เหมาะสำหรับเกมเมอร์และสายทำงาน",
      price: 47990,
      image: "/products/12.jpg",
    },
        {
      id: 13,
      name: "BMW i8",
      description: "เมาส์เกมมิ่งตอบสนองรวดเร็ว ดีไซน์สวยงาม",
      price: 3490000,
      image: "/products/13.jpg",
    },
    {
      id: 14,
      name: "Lamborghini Huracan  (HTO)",
      description: "💥HTO Full Carbon Bodykit With GT3 Racecar Floor By P1 Composite💥",
      price: 14900000,
      image: "/products/14.jpg",
    },
    {
      id: 15,
      name: "McLaren 720S",
      description: "Steering Wheel Clasp and Extended Gearshift Paddles in Satin Carbon Fibre",
      price: 20000000,
      image: "/products/15.jpg",
    },
    {
      id: 16,
      name: "AUDI R8 5.2 V10 VF Supercharger",
      description: "🔥Full Vorsteiner + Supercharger kit VF Engineering🔥",
      price: 13000000 ,
      image: "/products/16.jpg",
    },
  ];

  const [cart, setCart] = useState<CartItem[]>([]);

  // เพิ่มสินค้า: ถ้ามีอยู่แล้วเพิ่มจำนวน ถ้ายังไม่มีเพิ่มเป็น 1 ชิ้น
  const handleAddToCart = (product: ProductData) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...product, amount: 1 }];
    });
  };

  const handleChangeAmount = (id: number, amount: number) => {
    const safeAmount = Math.max(1, Math.floor(amount || 1));
    setCart((prev) => prev.map((item) =>
      item.id === id ? { ...item, amount: safeAmount } : item
    ));
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    window.alert("สั่งซื้อสินค้าเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ");
    setCart([]);
  };

  return (
    <main className="min-h-screen bg-[#f7f7f8] px-4 py-6 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="page-title">My Product Sirichai Khamsukalert SID 1680706197 NO. 29</h1>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onBuy={() => handleAddToCart(product)} />
          ))}
        </section>
        <Cart
          items={cart}
          onChangeAmount={handleChangeAmount}
          onRemove={handleRemoveFromCart}
          onCheckout={handleCheckout}
        />
      </div>
    </main>
  );
}

export default App;
