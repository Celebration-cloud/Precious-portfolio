'use client';

import { NextStudio } from 'next-sanity/studio';
import { createStudioConfig } from '../../../lib/cms/studio-config';

type StudioClientProps = {
  projectId: string;
  dataset: string;
};

export function StudioClient({ projectId, dataset }: StudioClientProps) {
  const config = createStudioConfig(projectId, dataset);

  return <NextStudio config={config} />;
}
