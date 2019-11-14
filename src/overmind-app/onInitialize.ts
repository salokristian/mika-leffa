import { OnInitialize } from 'overmind';

const onInitialize: OnInitialize = async ({ effects, state }) => {
  state.finnkino.theatreAreas = await effects.finnkino.getTheatreCities();
};

export default onInitialize;
