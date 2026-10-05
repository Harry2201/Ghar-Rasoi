/**
 * Minimal frontend cart (localStorage). Shape is backend-ready:
 * swap these functions for API calls later without touching the UI.
 */
export type CartItem = {
  id: string; // `${productId}::${variant}`
  productId: string;
  slug: string;
  name: string;
  variant: string | null;
  quantity: number;
  price: number | null; // null until real pricing exists
  image: string;
};

const KEY = "ghar-rasoi-cart";
export const CART_EVENT = "ghar-rasoi-cart-change";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function save(items: CartItem[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: items }));
  } catch {
    /* storage unavailable (private mode / quota) — fail silently */
  }
}

export function addToCart(item: Omit<CartItem, "id">): CartItem[] {
  const id = `${item.productId}::${item.variant ?? "default"}`;
  const items = getCart();
  const existing = items.find((entry) => entry.id === id);
  if (existing) {
    existing.quantity = Math.min(99, existing.quantity + item.quantity);
    existing.price = item.price;
  } else {
    items.push({ ...item, id });
  }
  save(items);
  return items;
}

export function setCartQuantity(id: string, quantity: number): CartItem[] {
  const next = Math.min(99, Math.max(0, Math.floor(quantity)));
  const items =
    next <= 0
      ? getCart().filter((entry) => entry.id !== id)
      : getCart().map((entry) =>
          entry.id === id ? { ...entry, quantity: next } : entry
        );
  save(items);
  return items;
}

export function removeFromCart(id: string): CartItem[] {
  const items = getCart().filter((entry) => entry.id !== id);
  save(items);
  return items;
}

export function cartQuantity(items: CartItem[] = getCart()): number {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}

/** Sum of priced lines only. Null when the cart is empty or nothing is priced. */
export function pricedSubtotal(items: CartItem[]): number | null {
  const priced = items.filter(
    (item) => typeof item.price === "number" && Number.isFinite(item.price)
  );
  if (priced.length === 0) return null;
  return priced.reduce(
    (sum, item) => sum + (item.price as number) * item.quantity,
    0
  );
}
