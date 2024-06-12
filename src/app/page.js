// import Image from "next/image";
// import styles from "./page.module.css";
import Features from "@/components/Featues";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Highlights from "@/components/Highlights";
import { Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <Highlights /> */}
      <Pricing />
      <Divider />
    </>
  );
}
