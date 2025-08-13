import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
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
    <Instructors/>
    <Footer/>
    </>
  );
}
