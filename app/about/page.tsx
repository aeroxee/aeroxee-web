import Container from "@/components/container";
import RenderImage from "@/components/renderimage";

import mypic from "@/public/pp.jpg";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tentang - Aeroxee",
  description:
    "Halaman ini adalah halaman yang akan menampilkan informasi tentang penulis website Aeroxee",
};

export default function About() {
  return (
    <Container className="px-4 md:px-[120px] lg:px-[240px] mx-auto relative min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] lg:w-[40%]">
        <div className="flex items-center justify-center mb-4">
          <RenderImage
            src={mypic}
            alt="my pic"
            width={2200}
            height={1000}
            className="w-[250px] h-[250px] rounded-full"
            rounded
          />
        </div>
        <p className="text-sm italic font-extralight text-center">
          Saya seorang mahasiswa aktif di bidang pemrograman website. Saya
          seorang pengembang web Fullstack yang bekerja dengan{" "}
          <Link
            href="https://nextjs.org"
            target="_blank"
            className="text-sky-600 underline"
          >
            Next.js
          </Link>{" "}
          dan{" "}
          <Link
            href="https://go.dev"
            target="_blank"
            className="text-sky-600 underline"
          >
            Go
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
