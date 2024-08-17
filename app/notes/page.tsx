import NoteCard from "@/components/cards/note-card";
import React from "react";

export default function page() {
  return (
    <section className="mx-auto flex flex-col items-center gap-y-2">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </section>
  );
}
