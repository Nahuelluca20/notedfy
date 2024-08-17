import React from "react";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata
  //  const previousImages = (await parent).openGraph?.images || []

  return {
    title: slug,
    openGraph: {
      // images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  };
}

export default function page({ params }: Props) {
  return <div>{params.slug}</div>;
}
