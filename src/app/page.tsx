import Header from "@/components/Header";
import MainSwiper from "@/components/MainSwiper";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";


export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden">
      <Header />
      <MainSwiper />
    </div>
  );
}
