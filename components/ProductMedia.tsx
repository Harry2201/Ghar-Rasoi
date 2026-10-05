import Image from "next/image";
import type { Product } from "../lib/products";

type ProductMediaProps = {
  product: Pick<Product, "name" | "images">;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  alt?: string;
  fallbackClassName?: string;
};

export default function ProductMedia({
  product,
  fill = false,
  width,
  height,
  sizes,
  className,
  priority,
  alt,
  fallbackClassName = "catalog-image-placeholder",
}: ProductMediaProps) {
  const src = product.images.front;
  const label = alt ?? product.name;

  if (!src) {
    return (
      <span className={fallbackClassName}>
        Photography for this product is not in the library yet
      </span>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes ?? "(max-width: 700px) 100vw, 40vw"}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={label}
      width={width ?? 640}
      height={height ?? 800}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  );
}