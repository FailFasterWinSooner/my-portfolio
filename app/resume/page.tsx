export default function Resume() {
  return (
    <main className="min-h-screen px-6 py-16">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold">Resume</h1>

        <p className="mt-4 text-gray-600">
          (Placeholder) Add your resume PDF here. You can upload a file and link to it below.
        </p>

        <div className="mt-6">
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
          <a className="underline" href="/">← Back to Home</a>
        </p>
      </section>
    </main>
  );
}
