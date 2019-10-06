import { IConfig } from 'overmind';
import { createHook } from 'overmind-react';
import * as actions from './actions';
import * as effects from './effects';
import state from './state';

const config = { state, actions, effects };

const useOvermind = createHook<typeof config>();

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export { useOvermind, config };
