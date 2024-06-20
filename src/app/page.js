// import Image from "next/image";
// import styles from "./page.module.css";
import { Divider } from "@mui/material";
import Hero from "@/components/version2/Hero";
import Highlights from "@/components/version2/Highlights";
export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      {/* <Features />
      <Highlights />
      <Pricing />
      <Divider /> */}
    </>
  );
}
