import Link from "next/link";
import Header from "../../components/Header";

export default function ProductNotFound() {
  return (
    <>
      <Header />
      <main className="product-not-found">
        <p className="product-detail-kicker">
          <i />
          CATALOGUE
        </p>
        <h1>
          This product is
          <br />
          <em>not in the range.</em>
        </h1>
        <p>
          The page you opened is not part of the current Ghar Rasoi catalogue.
        </p>
        <Link href="/products" className="product-not-found-link">
          Browse products <span aria-hidden="true">↗</span>
        </Link>
      </main>
    </>
  );
}
