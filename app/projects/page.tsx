import Link from "next/link";
export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="p-4 rounded-2xl border">
            <h3 className="font-semibold">Fixture for Micro-Dispense</h3>
            <p className="text-sm text-gray-600">SLA + metal inserts, CpK 1.51.</p>
          </article>

        <article className="p-4 rounded-2xl border">
            <h3 className="font-semibold">Inline Vision QA</h3>
            <p className="text-sm text-gray-600">2 min → 10 s inspection time.</p>
          </article>

          <article className="p-4 rounded-2xl border">
            <h3 className="font-semibold">3D-Printed Prototype Housings</h3>
            <p className="text-sm text-gray-600">~80% cheaper than CNC for early tests.</p>
          </article>
        </div>

        <p className="mt-8">
          <a className="underline" href="/">← Back to Home</Link>
        </p>
      </section>
    </main>
  );
}
