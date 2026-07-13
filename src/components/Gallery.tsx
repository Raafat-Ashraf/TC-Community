"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/lib/types";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            className="group relative aspect-square overflow-hidden rounded-xl bg-cream-200"
            onClick={() => setActiveIndex(i)}
            aria-label={`Open image: ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={close}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-white hover:bg-white/20"
            onClick={close}
            aria-label="Close lightbox"
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-4 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            &larr;
          </button>
          <div
            className="relative h-[70vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
          <button
            type="button"
            className="absolute right-4 rounded-full bg-white/10 px-4 py-3 text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            &rarr;
          </button>
          {images[activeIndex].caption && (
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-white/80">
              {images[activeIndex].caption}
            </p>
          )}
        </div>
      )}
    </>
  );
}
