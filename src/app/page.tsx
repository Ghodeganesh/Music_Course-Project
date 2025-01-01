import Image from "next/image";
import { SpotlightPreview } from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <div >
      <div className="w-full  min-h-screen h-[40rem] bg-black/[0.9] bg-grid-white/[0.2] antialiased">
        <SpotlightPreview />
        <FeaturedCourses />
        <WhyChooseUs />
        <Testimonials />

      </div>
    </div>
  );
}
