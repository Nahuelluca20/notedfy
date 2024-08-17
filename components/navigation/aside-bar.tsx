import { Folder, Tag } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AsideBar() {
  return (
    <aside className="bg-card border-r p-6 overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-2">Collections</h2>
        <div className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Folder className="w-4 h-4" />
            Work
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Folder className="w-4 h-4" />
            Personal
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Folder className="w-4 h-4" />
            Ideas
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Topics</h2>
        <div className="space-y-2">
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Tag className="w-4 h-4" />
            Work
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Tag className="w-4 h-4" />
            Personal
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            prefetch={false}
          >
            <Tag className="w-4 h-4" />
            Ideas
          </Link>
        </div>
      </div>
    </aside>
  );
}
