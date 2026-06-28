'use client';

import { useState } from 'react';

interface BookCoverProps {
  onOpen: () => void;
}

export default function BookCover({ onOpen }: BookCoverProps) {
  const [fading, setFading] = useState(false);

  const handleClick = () => {
    setFading(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <div
      className={`fixed inset-0 z-50 cursor-pointer transition-opacity duration-500 ease-out ${fading ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      onClick={handleClick}
    >
      <img
        src="/book-cover-photo.jpg"
        alt="Personal Archive - Chloe"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-transparent transition-colors duration-300 hover:bg-black/5" />
    </div>
  );
}
