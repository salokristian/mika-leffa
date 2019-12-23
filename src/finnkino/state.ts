import { Derive } from 'overmind';
import { TheatreAreas } from './types';

type State = {
  theatreAreas: TheatreAreas | null;
  selectedTheatreArea: number | null;
  selectedShowDates: string[];
  isShowDateSelected: Derive<State, (showDate: Date) => boolean>;
};

export const state: State = {
  theatreAreas: null,
  selectedTheatreArea: null,
  selectedShowDates: [],
  isShowDateSelected: (state_) => (showDate) =>
    state_.selectedShowDates.includes(showDate.toISOString().split('T')[0])
};
