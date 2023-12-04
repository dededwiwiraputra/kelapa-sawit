import type { Metadata } from "next";
import LandingPage from "./landingPage/index.js";

export const metadata: Metadata = {
  title: "Main Page",
  description: "Generated by create next app",
};

export default function Home() {
  return (
  <LandingPage />);
}
