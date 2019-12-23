import { OnInitialize } from 'overmind';

const placeholderAreaId = 1029;

const onInitialize: OnInitialize = async ({ effects, state }) => {
  const theatreAreas = await effects.finnkino.getTheatreCities();
  delete theatreAreas[placeholderAreaId];

  state.finnkino.theatreAreas = theatreAreas;
};

export default onInitialize;
