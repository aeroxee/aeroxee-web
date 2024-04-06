import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;

  return {
    title: `${id} - Aeroxee Portfolio`,
    description: "",
  };
}

export default function BlogDetail({ params, searchParams }: Props) {
  return (
    <Container className="py-[90px] px-4 md:px-[120px] lg:px-[240px] mx-auto relative min-h-screen">
      <div className="flex items-center justify-between gap-4 pb-4 border-b pt-5 mb-4">
        <div className="flex items-center gap-1">
            <Clock className="w-5 h-5" />
            24 January 2024
        </div>
        <Button variant="default">Subscribe</Button>
      </div>

      <div className="prose dark:prose-invert">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus odio qui, neque repellat harum velit iure beatae illo quaerat quisquam suscipit laborum at exercitationem pariatur, rem dolorum alias assumenda asperiores.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus hic repellat, nostrum ipsum aspernatur eum laboriosam fugiat corrupti eligendi animi, aliquam aut? Rem ducimus eaque facilis sunt corporis! Doloribus, quo.</p>

        <ol>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem ipsum dolor sit.</li>
        </ol>

        <h4>Lorem ipsum dolor sit.</h4>

        <pre><code>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla totam doloribus facilis perspiciatis? Alias similique facere excepturi quaerat! Nemo nulla sequi atque, optio minima unde aut consequatur porro temporibus rerum?</code></pre>

        <blockquote>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor itaque eligendi, aliquam obcaecati et sunt explicabo maxime inventore excepturi non?</blockquote>
      </div>
    </Container>
  );
}
