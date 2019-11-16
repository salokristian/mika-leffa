import finnkino from 'finnkino';
import { IConfig } from 'overmind';
import { createHook } from 'overmind-react';
import { merge, namespaced } from 'overmind/config';
import onInitialize from './onInitialize';
import state from './state';

const config = merge(
  { state, onInitialize },
  namespaced({
    finnkino
  })
);

const useOvermind = createHook<typeof config>();

declare module 'overmind' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Config extends IConfig<typeof config> {}
}

export { useOvermind, config };
