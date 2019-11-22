import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover
} from '@reach/combobox';
import React, { useState } from 'react';
import styled from 'styled-components';
import { baseInput } from 'components/Input';
import SectionTitle from 'components/SectionTitle';
import { useOvermind } from 'overmind-app';

const StyledComboboxInput = styled(ComboboxInput)`
  ${baseInput}
  width: 300px;
`;

const StyledComboboxList = styled(ComboboxList)`
  width: 100%;
  margin-top: 0.2rem;
  padding-left: 0;
  overflow: hidden;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
`;

const StyledComboboxOption = styled(ComboboxOption)`
  display: block;
  padding: 0.5em 0.7em;
  overflow: hidden;

  &:hover,
  &[data-highlighted] {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

const TheatreAreaSearch: React.FC = () => {
  const { state } = useOvermind();
  const [term, setTerm] = useState('');

  if (state.finnkino.theatreAreas !== null) {
    const matches = state.finnkino.theatreAreas
      .filter((theatreArea) => theatreArea.name.match(RegExp(term, 'i')))
      .slice(0, 5);

    return (
      <>
        <SectionTitle id="areaSearchLabel">Hae elokuvateatteria</SectionTitle>
        <Combobox>
          <StyledComboboxInput
            onChange={(e) => setTerm((e.target as HTMLInputElement).value)}
            aria-labelledby="areaSearchLabel"
          />
          <ComboboxPopover>
            <StyledComboboxList aria-labelledby="areaSearchLabel">
              {matches.map((theatreArea) => (
                <StyledComboboxOption value={theatreArea.name} key={theatreArea.id} />
              ))}
            </StyledComboboxList>
          </ComboboxPopover>
        </Combobox>
      </>
    );
  } else {
    return <span>Meillä on ongelma</span>;
  }
};

export default TheatreAreaSearch;
