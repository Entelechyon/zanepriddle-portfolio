export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2eee5] text-[#25231f]">
      <header className="sticky top-0 z-50 border-b border-[#25231f]/15 bg-[#f2eee5]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-[4.5rem] max-w-[76rem] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#top"
            className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#25231f] transition-colors hover:text-[#a7482f]"
          >
            Zane Priddle
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4 text-sm font-medium text-[#625e55] sm:gap-7">
              <li>
                <a className="transition-colors hover:text-[#a7482f]" href="#focus">
                  Focus
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-[#a7482f]" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="top" className="scroll-mt-20 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
          <div className="mx-auto max-w-[76rem]">
            <div className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#a7482f]">
                01 / Introduction
              </p>
              <div>
                <h1 className="max-w-5xl text-[clamp(3.75rem,10vw,8.25rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-[#1f1d19]">
                  Zane Priddle
                </h1>
                <p className="mt-8 max-w-3xl text-[clamp(1.55rem,3.25vw,2.8rem)] font-medium leading-[1.08] tracking-[-0.035em] text-[#3d3932]">
                  Software, publishing systems and practical digital projects.
                </p>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-[#777167]">
                  Melbourne, Australia
                </p>
              </div>
            </div>

            <div className="mt-16 grid border-t border-[#25231f]/25 pt-8 sm:mt-20 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14 lg:pt-10">
              <div aria-hidden="true" />
              <p className="max-w-4xl text-[clamp(1.6rem,3.15vw,3rem)] leading-[1.23] tracking-[-0.035em] text-[#2f2c27]">
                I’m interested in how small organisations work behind the scenes—where time goes,
                where complexity accumulates, and what might be worth simplifying or building.
              </p>
            </div>
          </div>
        </section>

        <section
          id="focus"
          className="scroll-mt-20 bg-[#292b24] px-5 py-16 text-[#f2eee5] sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-[76rem] gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#e07a55]">
                02 / Current focus
              </p>
              <p className="mt-3 text-sm text-[#b9b7ad]">Open investigation</p>
            </div>
            <p className="max-w-4xl text-[clamp(1.55rem,3vw,2.65rem)] leading-[1.28] tracking-[-0.03em] text-[#f4f0e8]">
              I’m currently looking into how independent publishers handle the work behind direct
              advertising, including whether and where time is lost or unnecessary complexity
              builds up. Before forming conclusions or building anything, I want to understand how
              that work actually happens inside different publishing businesses.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-20 border-t border-[#25231f]/20 bg-[#e8e1d5] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
        >
          <div className="mx-auto grid max-w-[76rem] gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#a7482f]">
              03 / Contact
            </p>
            <div>
              <h2 className="max-w-3xl text-[clamp(2.4rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#1f1d19]">
                For a relevant question or conversation:
              </h2>
              <a
                href="mailto:zane@zanepriddle.com"
                className="mt-7 inline-block break-all text-xl font-medium text-[#8e3c28] underline decoration-[#b8674e]/50 underline-offset-[0.3em] transition-colors hover:text-[#25231f] hover:decoration-[#25231f] sm:text-3xl"
              >
                zane@zanepriddle.com
              </a>
              <div className="mt-12 flex gap-6 text-sm font-medium text-[#625e55]">
                <a
                  href="https://www.linkedin.com/in/zaneonfire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#8e3c28]"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/Entelechyon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#8e3c28]"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f1d19] px-5 py-8 text-[#aaa59a] sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[76rem] flex-col gap-2 font-mono text-[0.68rem] uppercase tracking-[0.12em] sm:flex-row sm:items-center sm:justify-between">
          <p>Zane Priddle — Melbourne, Australia</p>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}
