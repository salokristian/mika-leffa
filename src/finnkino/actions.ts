import { Action } from 'overmind';
import { TheatreArea } from './types';

export const toggleTheatreArea: Action<string> = ({ state }, areaName) => {
  if (state.finnkino.theatreAreas) {
    const selectedTheatreArea = Object.entries(state.finnkino.theatreAreas).find(
      ([, area]) => area.name === areaName // Assume that names are unique, which is the the case on 2019/12
    );
    state.finnkino.selectedTheatreArea = (selectedTheatreArea?.[1] as TheatreArea).id ?? null;
  }
};

export const toggleShowDate: Action<Date> = ({ state }, showDate) => {
  const showDateStr = showDate.toISOString().split('T')[0];
  const showDates = state.finnkino.selectedShowDates;

  if (showDates.includes(showDateStr)) {
    state.finnkino.selectedShowDates = showDates.filter((date) => date !== showDateStr);
  } else {
    showDates.push(showDateStr);
  }
};
