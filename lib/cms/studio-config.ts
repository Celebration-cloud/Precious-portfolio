import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from '../../sanity/schemaTypes';

export function createStudioConfig(projectId: string, dataset: string) {
  return defineConfig({
    name: 'default',
    title: 'PEC Media Studio',
    projectId,
    dataset,
    basePath: '/studio',
    plugins: [structureTool(), visionTool()],
    schema: {
      types: schemaTypes,
    },
  });
}
