import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Resume</h1>

        <div className="mt-6">
          {/* Direct link to your resume PDF */}
          <a
            className="inline-block rounded-xl border px-4 py-2"
            href="/Ryan-Feetham-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open Resume PDF
          </a>
        </div>

        <p className="mt-8">
          <Link className="underline" href="/">
            ← Back to Home
          </Link>
        </p>
      </section>
    </main>
  );
}
