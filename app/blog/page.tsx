import Container from "@/components/container";
import RenderImage from "@/components/renderimage";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Aeroxee Portfolio",
  description: "New article in aeroxee",
};

export default function Blog() {
  return (
    <Container className="pt-[90px] px-4 md:px-[120px] lg:px-[240px] mx-auto relative min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
        {[0, 1, 2, 3, 4, 5].map((_, index) => (
          <Card key={index}>
            <RenderImage
              src="https://images.unsplash.com/photo-1709699459517-5427f7f27c05?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={1200}
              height={800}
              className="w-full h-[230px] rounded-t-sm"
            />
            <CardHeader>
              <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>
              <div className="flex items-center gap-2 font-extralight text-sm">
                <Clock className="w-4 h-4" />
                22 Januari 2024
              </div>
            </CardHeader>
            <CardContent>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius et
                accusantium architecto ratione rem. Nihil autem voluptatum porro
                ut nam.
              </p>
            </CardContent>
            <CardFooter className="flex flex-row-reverse">
              <Link href={`/blog/${index}`}>
                <Button>Read More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}
