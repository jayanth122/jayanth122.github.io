import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import { GoogleAnalytics } from '@next/third-parties/google';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
       <GoogleAnalytics gaId="G-1D31K13119" />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
    </main>
  );
}
