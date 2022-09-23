import { WebPlugin } from '@capacitor/core';

import type { InstallSourceInfoPlugin } from './definitions';

export class InstallSourceInfoWeb extends WebPlugin implements InstallSourceInfoPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
