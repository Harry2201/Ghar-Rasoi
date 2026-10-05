import type { Metadata } from "next";
import Header from "../../components/Header";
import CartView from "../../components/CartView";

export const metadata: Metadata = {
  title: "Cart | Ghar Rasoi Enterprises",
  description: "Review items saved from the Ghar Rasoi catalogue.",
};

export default function CartPage() {
  return (
    <>
      <Header />
      <main className="cart-page">
        <CartView />
      </main>
    </>
  );
}
