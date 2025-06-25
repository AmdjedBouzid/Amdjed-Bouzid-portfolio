import Header from "./Components/sections/Header";
import AboutMe from "./Components/sections/AboutMe";
import ServicesSection from "./Components/sections/ServicesSection";
import ProjectsSection from "./Components/sections/ProjectsSection";
import ContactSection from "./Components/sections/ContactSection";
import Navbar from "./Components/sections/NavBar";
import Footer from "./Components/sections/Footer";
import EmailSection from "./Components/sections/EmailSection";

export default function Home() {
  console.log("hello");
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 ">
      {/* <div className="absolute  z-50 left-[50%]">
        <img
          src="./public/assets/header-bg-color.png"
          alt="Header background"
          className="h-[100px] w-[100px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] xl:h-[400px] xl:w-[400px] 2xl:h-[500px] 2xl:w-[500px] object-cover"
        />
      </div> */}
      <Navbar />
      <Header />
      <AboutMe />
      <ServicesSection />
      <ProjectsSection />
      <EmailSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
