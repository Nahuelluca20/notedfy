import Link from "next/link";
import React from "react";
import { StickyNote } from "lucide-react";
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="border-b px-10 inset-x-0 top-0 z-50 py-4">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-10 text-sm font-medium">
          <li className="flex items-center gap-2 font-serif text-lg font-semibold">
            <StickyNote className="h-6 w-6 text-primary" />
            <Link href="/">Notedfy</Link>
          </li>
          {/* <li>
            <Link href="/courses">Courses</Link>
          </li> */}
          {/* <SignedIn>
            <li>
              <Link href="/learn">My learning</Link>
            </li>
          </SignedIn> */}
        </ul>

        <div className="flex items-center justify-between gap-6">
          <Button size="sm" variant="secondary" asChild>
            <Link href="/notes/new-notes">New note</Link>
          </Button>

          <SignedOut>
            <SignInButton>
              <Button size="sm">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}
