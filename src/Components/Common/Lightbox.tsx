import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import type { GalleryImage } from '../../data/portfolio';

type Props = {
  images: GalleryImage[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

const navButton =
  'absolute top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-0 bg-white/10 text-2xl text-white transition-colors hover:bg-white/20';

/** In-page image preview: Esc or backdrop click closes, arrow keys/buttons step through the set. */
const Lightbox = ({ images, index, onChange, onClose }: Props) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const many = images.length > 1;
  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      opener?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (many && e.key === 'ArrowLeft') onChange((index - 1 + images.length) % images.length);
      else if (many && e.key === 'ArrowRight') onChange((index + 1) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, images.length, many, onChange, onClose]);

  const img = images[index];

  return createPortal(
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Image preview'
      onClick={onClose}
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-12'
    >
      <img
        src={img.src}
        alt={img.alt}
        onClick={(e) => e.stopPropagation()}
        className='max-h-full max-w-full rounded-md object-contain shadow-2xl'
      />

      <button
        ref={closeRef}
        type='button'
        onClick={onClose}
        aria-label='Close preview'
        className='absolute top-4 right-4 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border-0 bg-white/10 text-xl text-white transition-colors hover:bg-white/20'
      >
        ✕
      </button>

      {many && (
        <>
          <button
            type='button'
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label='Previous image'
            className={`${navButton} left-3 md:left-6`}
          >
            ‹
          </button>
          <button
            type='button'
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label='Next image'
            className={`${navButton} right-3 md:right-6`}
          >
            ›
          </button>
          <span className='absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-xs text-white/70'>
            {index + 1} / {images.length}
          </span>
        </>
      )}
    </div>,
    document.body,
  );
};

export default Lightbox;
