import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Rooms from "@/components/Rooms";
import EnvironmentIndicators from "@/components/EnvironmentIndicators";
import Gallery from "@/components/Gallery";
import VideoTour from "@/components/VideoTour";
import Amenities from "@/components/Amenities";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <EnvironmentIndicators />
        <Gallery />
        <VideoTour />
        <Amenities />
        <LocationMap />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <StickyBookingBar />
    </>
  );
}
