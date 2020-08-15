import { Config } from '@stencil/core';
import { less } from '@stencil/less';

export const config: Config = {
  plugins: [
    less()
  ],
  namespace: 'shared-component-library',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
