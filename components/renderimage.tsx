"use client";

import { Loader2 } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface RenderImageProps {
  src: StaticImageData | string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  rounded?: boolean;
}

export default function RenderImage({
  src,
  alt,
  width,
  height,
  className,
  rounded,
}: RenderImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoadingComplete={() => {
            setIsLoading(false);
        }}
      />
      <div
        className={`absolute top-0 left-0 bottom-0 right-0 bg-background/50 filter backdrop-blur-lg ${
          rounded && "rounded-full"
        } w-[${width}px] h-[${height}px] ${isLoading ? "opacity-100 visible" : "opacity-0 invisible"} transition-all duration-200 ease-in-out`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Loader2 className="animate-spin text-white" size={40} />
        </div>
      </div>
    </div>
  );
}
