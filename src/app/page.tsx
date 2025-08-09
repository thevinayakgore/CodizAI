import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import { Features } from '@/components/Features'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* <Features /> */}
        {/* Add more sections like Testimonials, Pricing */}
      </main>
      <Footer />
    </>
  );
}
