import Header from "@/components/navigation/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <div>asa</div>
      <Button variant="outline" asChild>
        <Link href={"/notes"}>Button</Link>
      </Button>
    </main>
  );
}
