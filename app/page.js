"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center overflow-y-scroll">
      <NavBar />
      <Header />
      <AboutMe />
    </div>
  );
}
