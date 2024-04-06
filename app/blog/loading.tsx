import Container from "@/components/container";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <Container className="px-4 md:px-[120px] lg:px-[240px] mx-auto relative min-h-screen">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Loader2 size={50} className="animate-spin" />
      </div>
    </Container>
  );
}
