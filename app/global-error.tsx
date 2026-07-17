'use client';

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
        <main className="max-w-lg text-center">
          <h1 className="text-3xl font-bold">PEC Media Production is temporarily unavailable</h1>
          <p className="mt-4 text-slate-300">Please retry the page in a moment.</p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Retry
          </button>
        </main>
      </body>
    </html>
  );
}
