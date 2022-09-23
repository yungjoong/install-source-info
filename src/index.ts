import { registerPlugin } from '@capacitor/core';

import type { InstallSourceInfoPlugin } from './definitions';

const InstallSourceInfo = registerPlugin<InstallSourceInfoPlugin>('InstallSourceInfo', {
  web: () => import('./web').then(m => new m.InstallSourceInfoWeb()),
});

export * from './definitions';
export { InstallSourceInfo };
