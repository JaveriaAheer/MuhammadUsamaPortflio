/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import EducationCertifications from "./components/EducationCertifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white-clean selection:bg-accent selection:text-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <EducationCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
