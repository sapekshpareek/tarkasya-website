// import Image from "next/image";
// import styles from "./page.module.css";
import { Divider } from "@mui/material";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <div id="about" />
      <Highlights />
      <div id="contact" />
      {/* <Features />
      <Highlights />
      <Pricing />
      <Divider /> */}
    </>
  );
}
