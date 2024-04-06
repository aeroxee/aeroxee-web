"use client";

import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Container from "./container";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export default function Navbar() {
  const [show, setShow] = useState<boolean>(false);

  const pathname = usePathname();
  const router = useRouter();

  const isBlogDetail = /^\/blog\/.*/.test(pathname);

  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const handleClickOutside = (e: Event) => {
      if (!navRef.current?.contains(e.target as Element)) {
        setShow(false);
      }
    };
    document.documentElement.addEventListener("click", handleClickOutside);
    // document.documentElement.removeEventListener("click", handleClickOutside);
  });

  useEffect(() => {
    const navLinks = document.querySelectorAll("#navLinks");

    navLinks.forEach((e) => {
      e.addEventListener("click", () => {
        setShow(false);
      });
    });
  });

  return (
    <nav className="fixed z-30 top-0 left-0 right-0 bg-background/70 filter backdrop-blur-lg">
      <Container className="px-1 md:px-[120px] lg:px-[240px] mx-auto">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center w-full">
            {isBlogDetail && (
              <button
                type="button"
                className="me-4 flex items-center justify-center"
                onClick={() => router.back()}
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
            )}
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/" className="text-lg font-extrabold">
                Aeroxee
              </Link>
              <div className="flex items-center">
                <div className="md:hidden">
                  <ModeToggle />
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setShow(true)}
                  className="md:hidden"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div
            ref={navRef}
            className={`flex flex-col md:flex-row items-start md:items-center gap-4 absolute md:static top-0 ${
              show ? "left-0" : "-left-[800px]"
            } w-[445px] md:w-auto min-h-screen md:min-h-0 bg-background md:bg-inherit p-6 md:p-0 border-r md:border-r-0 transition-all ease-in-out duration-200`}
          >
            <div className="flex items-center justify-between w-full md:hidden mb-5">
              <Link href="/" className="text-2xl font-extrabold">
                Aeroxee
              </Link>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShow(false)}
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            <Link
              id="navLinks"
              href="/"
              className={`${
                pathname === "/"
                  ? "text-sky-600 dark:text-white"
                  : "text-gray-500"
              } hover:text-sky-600 dark:hover:text-white text-sm`}
            >
              Home
            </Link>
            <Link
              id="navLinks"
              href="/about"
              className={`${
                pathname.startsWith("/about")
                  ? "text-sky-600 dark:text-white"
                  : "text-gray-500"
              } hover:text-sky-600 dark:hover:text-white text-sm`}
            >
              Tentang
            </Link>
            <Link
              id="navLinks"
              href="/blog"
              className={`${
                pathname.startsWith("/blog")
                  ? "text-sky-600 dark:text-white"
                  : "text-gray-500"
              } hover:text-sky-600 dark:hover:text-white text-sm`}
            >
              Blog
            </Link>
            <Link
              id="navLinks"
              href="/gallery"
              className={`${
                pathname.startsWith("/gallery")
                  ? "text-sky-600 dark:text-white"
                  : "text-gray-500"
              } hover:text-sky-600 dark:hover:text-white text-sm`}
            >
              Galeri
            </Link>
            <div className="hidden md:block">
              <ModeToggle />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
