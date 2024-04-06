"use client";

import Image from "next/image";
import { Key, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface ImageType {
  src: string;
  title: string;
  description: string;
  blurDataURL?: string;
}

interface Props {
  images: ImageType[];
}

export default function GalleryImages({ images: Images }: Props) {
  const [images, setImages] = useState<any>([]);
  const [index, setIndex] = useState<number>(-1);
  const [page, setPage] = useState<number>(1);
  const perPage = 20;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?page=${page}&per_page=${perPage}&client_id=F-1a1gMG8kBR9thp4j-RDrWJ0okQeIYIa0B3VnuM550`
        );
        const data = await response.json();
        setImages((prevImages: any) => [...prevImages, ...data]);
        console.log(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [page]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more images to load</p>}
        className="columns-3 gap-2"
      >
        {images.map((image: any, index: Key) => (
          <div key={index} className="mb-2">
            <Image
              src={image.urls.small}
              alt=""
              width={1200}
              height={800}
              className="h-auto max-w-full"
              loading="lazy"
            />
          </div>
        ))}
      </InfiniteScroll>

      {/* <Lightbox
        index={index}
        slides={images}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions]}
      /> */}
    </>
  );
}
