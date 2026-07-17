import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">404</p>
        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">This page is out of frame</h1>
        <p className="mt-5 text-lg text-slate-300">
          The page you requested does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold transition-colors hover:bg-blue-700"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Return home
        </Link>
      </div>
    </main>
  );
}
