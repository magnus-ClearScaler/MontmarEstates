import { createFileRoute } from "@tanstack/react-router";

import { useTheme } from "../lib/useTheme";
import { useReveal } from "../lib/useReveal";
import { Wordmark } from "../components/Wordmark";
import { ThemeToggle } from "../components/ThemeToggle";
import { Hero } from "../components/sections/Hero";
import { Vision } from "../components/sections/Vision";
import { Audience } from "../components/sections/Audience";
import { WhyUs } from "../components/sections/WhyUs";
import { CommissionProblem } from "../components/sections/CommissionProblem";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  component: Proposal,
});

function Proposal() {
  const { theme, toggle } = useTheme();
  useReveal();

  return (
    <main className="bg-base text-base-fg">
      {/* Slim sticky header: wordmark + day/night toggle */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md [background:color-mix(in_srgb,var(--bg)_72%,transparent)]">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-10">
          <a href="#top" className="text-sm">
            <Wordmark />
          </a>
          <ThemeToggle theme={theme} onToggle={toggle} />
        </div>
      </header>

      <Hero />
      <Vision />
      <Audience />
      <WhyUs />
      <CommissionProblem />
      <Footer />
    </main>
  );
}
