import { Derive } from 'overmind';
import { TheatreArea } from './types';

type State = {
  theatreAreas: TheatreArea[] | null;
  selectedShowDates: string[];
  isShowDateSelected: Derive<State, (showDate: Date) => boolean>;
};

export const state: State = {
  theatreAreas: null,
  selectedShowDates: [],
  isShowDateSelected: (state_) => (showDate) =>
    state_.selectedShowDates.includes(showDate.toISOString().split('T')[0])
};
