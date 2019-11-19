import { OnInitialize } from 'overmind';

const placeholderAreaId = 1029;

const onInitialize: OnInitialize = async ({ effects, state }) => {
  const theatreAreas = await effects.finnkino.getTheatreCities();
  state.finnkino.theatreAreas = theatreAreas.filter(
    (theatreArea) => theatreArea.id !== placeholderAreaId
  );
};

export default onInitialize;
