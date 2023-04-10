/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
   <>
   <div className="bg-gray-700 text-white h-screen ">
    <Head>
      <title>Ivan's portfolio</title>
    </Head>

    <Header />

    <section>
      <Hero />
    </section>
   </div>
    </>
  )
}
