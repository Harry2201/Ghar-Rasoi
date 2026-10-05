import { products, type Product, type ProductVariant } from "./products";
import { site } from "./site";

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

/** Same category first, then other products, never the current one. Max 4. */
export function getRelatedProducts(current: Product, limit = 4): Product[] {
  const others = products.filter((item) => item.id !== current.id);
  const same = others.filter((item) => item.category === current.category);
  const rest = others.filter((item) => item.category !== current.category);
  return [...same, ...rest].slice(0, limit);
}

export function formatPrice(price?: number | null): string | null {
  if (typeof price !== "number" || !Number.isFinite(price)) return null;
  return `₹${price.toLocaleString("en-IN")}`;
}

export function variantLabel(variant?: ProductVariant | null): string | null {
  return variant?.size ?? null;
}

/**
 * Returns a wa.me-ready number, or null while lib/site.ts still holds a
 * placeholder (e.g. "745987XXXX"). 10-digit Indian numbers get the 91 prefix.
 */
export function getWhatsAppNumber(): string | null {
  const raw = String(site.whatsapp ?? "");
  const digits = raw.replace(/[\s+\-()]/g, "");
  if (!/^\d{10,15}$/.test(digits)) return null;
  return digits.length === 10 ? `91${digits}` : digits;
}

export function buildWhatsAppUrl(
  number: string,
  productName: string,
  variant: string | null,
  quantity: number
): string {
  const lines = [
    "Hello Ghar Rasoi,",
    "I would like to order:",
    productName,
    ...(variant ? [variant] : []),
    `Quantity: ${quantity}`,
  ];
  return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
}
