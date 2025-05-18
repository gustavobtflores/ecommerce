'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import Image from 'next/image';

export function Gallery({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useLocalStorage(
    'selectedThumbnail',
    images[0]
  );

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex justify-center w-full bg-[#f5f5f5] md:bg-none">
        <Image
          src={`/images/${currentImage}`}
          alt=""
          width={500}
          height={500}
          priority
          unoptimized
          className="rounded-lg"
        />
      </div>
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
              className="w-16 h-16 aspect-square object-cover rounded-lg border border-gray-200 hover:border-gray-300 transition duration-200"
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
