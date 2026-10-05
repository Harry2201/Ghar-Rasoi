"use client";

import { useState } from "react";

export default function ProductGallery({
  name,
  images,
}: {
  name: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const current = images[active];
  const showImage = current && !failed[current];

  return (
    <div className="product-detail-gallery">
      <div className="product-detail-gallery-main">
        {showImage ? (
          <img
            key={current}
            src={current}
            alt={name}
            onError={() => setFailed((prev) => ({ ...prev, [current]: true }))}
          />
        ) : (
          <span className="product-detail-gallery-empty">
            Product image coming soon
          </span>
        )}
      </div>

      {images.length > 1 && (
        <div className="product-detail-thumbs" role="group" aria-label={`${name} images`}>
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-label={`Show image ${index + 1} of ${images.length}`}
              aria-pressed={index === active}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <img src={src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
