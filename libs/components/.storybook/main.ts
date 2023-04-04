import type { StorybookConfig } from '@storybook/core-common';

import { mergeConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  core: { builder: '@storybook/builder-vite' },
  stories: [
    '../src/lib/**/*.stories.mdx',
    '../src/lib/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
  async viteFinal(config: any) {
    return mergeConfig(config, {
      plugins: [
        viteTsConfigPaths({
          root: '../../../',
        }),
      ],
    });
  },
} as StorybookConfig;

module.exports = config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
