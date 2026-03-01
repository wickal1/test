import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Part from '@/components/Part';
import Projects from '@/components/Projects';
import Gear from '@/components/Gear';
import Recruit from '@/components/Recruit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Part />
      <Projects />
      <Gear />
      <Recruit />
      <Footer />
    </main>
  );
}
