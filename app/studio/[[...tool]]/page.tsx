import { Suspense } from 'react';
import { connection } from 'next/server';
import { StudioClient } from './studio-client';

async function StudioRuntime() {
  await connection();

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

  if (!projectId) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-neutral-950 px-6 text-white">
        <div className="max-w-lg space-y-3 rounded-2xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-2xl font-semibold">Sanity Studio needs configuration</h1>
          <p className="text-sm leading-6 text-white/70">
            Add NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to your environment,
            then restart the development server.
          </p>
        </div>
      </main>
    );
  }

  return <StudioClient projectId={projectId} dataset={dataset} />;
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" aria-hidden="true" />}>
      <StudioRuntime />
    </Suspense>
  );
}
