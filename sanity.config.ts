import { createStudioConfig } from './lib/cms/studio-config';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

if (!projectId) {
  throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is required to run Sanity Studio.');
}

export default createStudioConfig(projectId, dataset);
