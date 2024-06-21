// import Image from "next/image";
// import styles from "./page.module.css";
import { Divider } from "@mui/material";
import Hero from "@/components/version2/Hero";
import Highlights from "@/components/version2/Highlights";
import Features from "@/components/version2/Features";
export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <Features />
      {/* <Features />
      <Highlights />
      <Pricing />
      <Divider /> */}
    </>
  );
}
