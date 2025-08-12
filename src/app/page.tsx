import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Testinomial from "@/components/Testinomial";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <Testinomial/>
    <UpComingWebinars/>
    </>
  );
}
