"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import { useState, useEffect } from "react";

export default function Home() {
  const [width, setWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [height, setHeight] = useState(() =>
    typeof window !== "undefined" ? window.innerHeight : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log("height", height, width);

  return (
    <div className="flex flex-col h-screen items-center overflow-y-scroll ">
      <NavBar />
      <Header />
      <AboutMe />
    </div>
  );
}
