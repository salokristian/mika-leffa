import { Action } from 'overmind';

export const toggleShowDate: Action<Date> = ({ state }, showDate) => {
  const showDateStr = showDate.toISOString().split('T')[0];
  const showDates = state.finnkino.selectedShowDates;

  if (showDates.includes(showDateStr)) {
    state.finnkino.selectedShowDates = showDates.filter((date) => date !== showDateStr);
  } else {
    showDates.push(showDateStr);
  }
};
