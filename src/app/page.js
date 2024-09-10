import Hero from "./components/Hero";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Price from "./components/Price";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
      <main className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <Workflow />
        <Price />
        <Testimonials />
      </main>
  );
}
