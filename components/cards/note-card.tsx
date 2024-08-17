import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import Link from "next/link";

export default function NoteCard() {
  return (
    <Card className="w-full max-w-lg p-4 flex justify-between items-center">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold">A Thoughtful Note</h3>
        <div className="text-sm text-muted-foreground">
          August 17, 2024 - by Catherine
        </div>
      </div>
      <Button variant="ghost" className="ml-4" asChild>
        <Link href={"notes/slug-sarasa"}>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </Button>
    </Card>
  );
}
