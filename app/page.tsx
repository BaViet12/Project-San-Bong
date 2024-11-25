'use client'
import Image from "next/image";
import Navbar from "./components/Navbar";
import Imagesearch from "./components/Imagesearch";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import ListSoccer from "./components/ListSoccer";
import BookSan from "./components/BookSan";

export default function Home() {
  return (
      <div>
        <Navbar></Navbar>
        <Imagesearch></Imagesearch>
        <Intro></Intro>
        {/* <ListSoccer></ListSoccer> */}
        <BookSan></BookSan>
        <Footer></Footer>
      </div>
  );
}
