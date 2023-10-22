"use client";
import { fetchData } from '@/app/lib/fetchData';
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {

  const data = await fetchData({cache: "no-store"});
  console.log({data})
  return (
    <>
      <div>posts: {params.slug}</div>
      {/* 以下のリンクをクリックすると posts/1 -> posts/2 のように画面遷移を行う */}
      <Link href={`/posts/${Number(params.slug) + 1}`}>
        Go to next page
      </Link>
    </>
  )
}
