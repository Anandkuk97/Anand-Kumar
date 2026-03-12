import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="relative bg-[#121212] min-h-screen selection:bg-white/30 selection:text-white">
      {/* 
        Scroll-Linked Sequence Section
        ScrollyCanvas handles the 500vh height and the sticky canvas layout.
        Overlay is absolutely positioned on top to match the 500vh scroll space.
      */}
      <div className="relative w-full">
        <Overlay />
        <ScrollyCanvas />
      </div>

      {/* 
        Below the fold: Project Grid 
        This sits natively in the document flow after the 500vh scroll section finishes.
      */}
      <Projects />
    </main>
  );
}
