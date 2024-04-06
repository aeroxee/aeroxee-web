import { Github } from "lucide-react";
import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <Container className="px-1 md:px-[120px] lg:px-[240px] mx-auto">
      <footer className="mt-20 p-5 border-t">
        <div className="flex items-center justify-between text-sm font-light">
          <p>&copy; 2024 Aeroxee, Inc.</p>
          <div className="flex items-center gap-3">
            <Link href="https://github.com/aeroxee" target="_blank">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
