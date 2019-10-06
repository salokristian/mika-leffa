import { Action } from 'overmind';

export const test: Action = ({ state }) => {
  state.test = 'asd';
};
