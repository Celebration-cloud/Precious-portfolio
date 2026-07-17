import { Suspense } from 'react';
import { connection } from 'next/server';
import { StudioClient } from './studio-client';

async function StudioRuntime() {
  await connection();
  return <StudioClient />;
}

export default function StudioPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" aria-hidden="true" />}>
      <StudioRuntime />
    </Suspense>
  );
}
