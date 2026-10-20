
const topics = [
  {
    number: '01',
    icon: '◈',
    title: 'Australia and its people',
    description:
      'Explore Australian history, traditions, national identity and the people who shape the country.',
  },
  {
    number: '02',
    icon: '⚖',
    title: 'Democratic beliefs, rights and liberties',
    description:
      'Learn about democracy, freedom, equality and the principles of Australian society.',
  },
  {
    number: '03',
    icon: '⌂',
    title: 'Government and the law',
    description:
      'Understand Australia’s system of government, laws and civic responsibilities.',
  },
  {
    number: '04',
    icon: '✳',
    title: 'Australian values',
    description:
      'Review the values and principles that are central to Australian society.',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7F4] text-[#243746]">
      <header className="border-b border-[#102D27]/10 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="CivicPath Australia home">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#102D27] text-2xl text-[#D9B86C]">
              ⊕
            </span>
            <span>
              <span className="block text-xl font-extrabold tracking-tight text-[#102D27]">
                CivicPath
              </span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#64756D]">
                Australia
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#topics" className="transition hover:text-[#43836B]">
              Study topics
            </a>
            <a href="#practice" className="transition hover:text-[#43836B]">
              Practice
            </a>
            <a href="#about" className="transition hover:text-[#43836B]">
              About
            </a>
          </nav>

          <a
            href="#practice"
            className="rounded-xl bg-[#102D27] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#21483C]"
          >
            Get started <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <section className="relative bg-[#102D27] text-white">
        <div className="pointer-events-none absolute -right-28 -top-24 h-80 w-80 rounded-full border border-[#D9B86C]/20" />
        <div className="pointer-events-none absolute -right-12 -top-8 h-48 w-48 rounded-full border border-[#D9B86C]/20" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-[#43836B]/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D9B86C]/30 bg-white/5 px-4 py-2 text-sm text-[#E8D8A8]">
              <span aria-hidden="true">✦</span>
              Your learning journey starts here
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your journey to
              <span className="block text-[#D9B86C]">
                Australian citizenship
              </span>
              starts here.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#D4E0D9]">
              Prepare with structured practice, clear explanations and
              realistic mock tests. Build your knowledge one step at a time.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#practice"
                className="rounded-xl bg-[#D9B86C] px-6 py-4 text-center font-bold text-[#102D27] transition hover:bg-[#E8CE8D]"
              >
                Start your preparation <span aria-hidden="true">→</span>
              </a>
              <a
                href="#topics"
                className="rounded-xl border border-white/25 px-6 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Explore study topics
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-[#B6C9BF]">
              Independent study resource · Learn at your own pace
            </p>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-[#B6C9BF]">
                    Your preparation pathway
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Every step counts.
                  </h2>
                </div>
                <span className="text-3xl text-[#D9B86C]" aria-hidden="true">
                  ◎
                </span>
              </div>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9B86C]/15 text-xl text-[#D9B86C]">
                    1
                  </span>
                  <div>
                    <h3 className="font-bold">Learn the essentials</h3>
                    <p className="mt-1 text-sm leading-6 text-[#B6C9BF]">
                      Work through the main study topics.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-5 border-l border-dashed border-[#D9B86C]/50" />

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9B86C]/15 text-xl text-[#D9B86C]">
                    2
                  </span>
                  <div>
                    <h3 className="font-bold">Practise your knowledge</h3>
                    <p className="mt-1 text-sm leading-6 text-[#B6C9BF]">
                      Answer questions and learn from explanations.
                    </p>
                  </div>
                </div>

                <div className="ml-5 h-5 border-l border-dashed border-[#D9B86C]/50" />

                <div className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#D9B86C]/15 text-xl text-[#D9B86C]">
                    3
                  </span>
                  <div>
                    <h3 className="font-bold">Prepare with mock tests</h3>
                    <p className="mt-1 text-sm leading-6 text-[#B6C9BF]">
                      Check your readiness with timed practice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm leading-6 text-[#D4E0D9]">
                  The real citizenship test is conducted in English.
                  Our aim is to make preparation clearer and more accessible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="practice" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#43836B]">
              Your next step
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102D27] sm:text-4xl">
              Find your way to prepare
            </h2>
            <p className="mt-4 leading-7 text-[#5F6D68]">
              Begin with a subject you want to understand, then build up to
              a complete practice examination.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-[#102D27]/10 bg-white p-7 shadow-sm sm:p-9">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F0E9] text-2xl">
                ◫
              </span>
              <h3 className="mt-6 text-2xl font-bold text-[#102D27]">
                Topic practice
              </h3>
              <p className="mt-3 leading-7 text-[#5F6D68]">
                Focus on one subject at a time. Answer multiple-choice
                questions and understand why each answer is correct.
              </p>
              <a
                href="#topics"
                className="mt-6 inline-flex font-bold text-[#27664F] hover:text-[#102D27]"
              >
                Browse topics <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </article>

            <article className="rounded-3xl border border-[#102D27]/10 bg-white p-7 shadow-sm sm:p-9">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F0DC] text-2xl">
                ◷
              </span>
              <h3 className="mt-6 text-2xl font-bold text-[#102D27]">
                Mock examination
              </h3>
              <p className="mt-3 leading-7 text-[#5F6D68]">
                Work towards a timed, 20-question practice exam designed
                around the test format described in our study plan.
              </p>
              <span className="mt-6 inline-flex rounded-full bg-[#F7F0DC] px-3 py-2 text-sm font-bold text-[#735B1C]">
                Coming soon
              </span>
            </article>
          </div>
        </div>
      </section>

      <section id="topics" className="border-y border-[#102D27]/5 bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#43836B]">
              Study guide
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#102D27] sm:text-4xl">
              Four areas to explore
            </h2>
            <p className="mt-4 leading-7 text-[#5F6D68]">
              Build your understanding of Australian history, democratic
              principles, government and Australian values.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <article
                key={topic.number}
                className="group rounded-2xl border border-[#102D27]/10 bg-[#F5F7F4] p-6 transition hover:-translate-y-1 hover:border-[#43836B]/50 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102D27] text-xl text-[#D9B86C]">
                    {topic.icon}
                  </span>
                  <span className="text-sm font-bold tracking-widest text-[#87958D]">
                    {topic.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold leading-7 text-[#102D27]">
                  {topic.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5F6D68]">
                  {topic.description}
                </p>
                <span className="mt-5 inline-block text-sm font-bold text-[#27664F]">
                  Study area
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#E8F0E9] px-6 py-10 text-center sm:px-12 sm:py-14">
          <span className="text-3xl text-[#27664F]" aria-hidden="true">
            ✦
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-[#102D27] sm:text-3xl">
            Clear learning. Steady progress.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#52675D]">
            CivicPath Australia is being developed as an independent study
            resource. Official Australian Government study materials should
            remain your primary reference when preparing for the test.
          </p>
        </div>
      </section>

      <footer className="bg-[#102D27] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xl font-extrabold">CivicPath</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.25em] text-[#D9B86C]">
                Australia
              </p>
              <p className="mt-3 text-sm text-[#B6C9BF]">
                Learn. Practise. Prepare.
              </p>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#B6C9BF]">
              CivicPath Australia is an independent study resource. It is not
              affiliated with, sponsored by, or endorsed by the Australian
              Government or the Department of Home Affairs. It does not
              guarantee a pass.
            </p>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-sm text-[#B6C9BF]">
            © {new Date().getFullYear()} CivicPath Australia. Independent study
            resource.
          </div>
        </div>
      </footer>
    </main>
  )
}
