'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function WebsiteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Website route error', error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-4 dark:bg-slate-950">
      <div className="max-w-lg text-center">
        <AlertTriangle className="mx-auto h-12 w-12 text-blue-600" />
        <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Something went wrong
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          We could not load this page. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 inline-flex items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <RefreshCw className="mr-2 h-5 w-5" />
          Try again
        </button>
      </div>
    </section>
  );
}
