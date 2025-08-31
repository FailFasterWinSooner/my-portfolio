import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">Ryan Feetham</h1>
        <p className="mt-4 text-lg text-gray-600">
          Mechanical Engineer • CAD/DFM • Mechatronics • 3D Printing
        </p>

        <div className="mt-8 flex gap-3">
          <Link href="/projects" className="px-4 py-2 rounded-xl bg-black text-white">
            View Projects
          </Link>
          <Link href="/resume" className="px-4 py-2 rounded-xl border">
            Resume
          </Link>
        </div>

        <ul className="mt-10 grid gap-4">
          <li className="p-4 rounded-2xl border">
            <h3 className="font-semibold">Prototype Micro-Dispense Fixture</h3>
            <p className="text-sm text-gray-600">Cut inspection from ~2 min → ~10 s; CpK 1.51</p>
          </li>
          <li className="p-4 rounded-2xl border">
            <h3 className="font-semibold">Vision-Assisted Inline QA</h3>
            <p className="text-sm text-gray-600">Automated variability checks; SOP + tech training</p>
          </li>
        </ul>
      </section>
    </main>
  );
}
