'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Imagesearch from "./components/Imagesearch";
import Intro from "./components/Intro";
import Footer from "./components/Footer";

export default function Home() {
  return (
      <div>
        <Navbar></Navbar>
        <Imagesearch></Imagesearch>
        <Intro></Intro>
        <Footer></Footer>
      </div>
  );
}
