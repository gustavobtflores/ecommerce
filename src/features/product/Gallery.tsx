'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Gallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div className="flex flex-col items-center">
      <Image
        src={`/images/${currentImage}`}
        alt=""
        width={500}
        height={500}
        priority
        unoptimized
        className="rounded-lg"
      />
      <div className="flex items-center justify-center gap-2 mt-4 px-4 md:px-0">
        {images.map((image) => (
          <button
            className="cursor-pointer"
            key={image}
            onClick={() => setCurrentImage(image)}
          >
            <Image
              src={`/images/${image}`}
              alt=""
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-lg border border-gray-200 hover:border-gray-300 transition duration-200"
              style={{
                borderColor: currentImage === image ? '#50B0F4' : '',
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
