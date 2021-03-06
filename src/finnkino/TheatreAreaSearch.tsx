import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover
} from '@reach/combobox';
import '@reach/combobox/styles.css';
import React, { useState } from 'react';
import styled from 'styled-components';
import { baseInput } from 'components/Input';
import SectionTitle from 'components/SectionTitle';
import Section from 'components/Section';
import { useOvermind } from 'overmind-app';

const StyledComboboxInput = styled(ComboboxInput)`
  ${baseInput}
  width: 300px;
`;

const StyledComboboxPopover = styled(ComboboxPopover)`
  &[data-reach-combobox-popover] {
    margin: 0;
    border: none;
    background-color: inherit;
  }
`;

const StyledComboboxList = styled(ComboboxList)`
  width: 100%;
  margin-top: 0.2rem;
  padding-left: 0;
  overflow: hidden;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.colors.secondaryDark};
`;

const StyledComboboxOption = styled(ComboboxOption)`
  &[data-reach-combobox-option] {
    display: block;
    padding: 0.5em 0.7em;
    overflow: hidden;

    &:hover,
    &[data-highlighted] {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const TheatreAreaSearch: React.FC = () => {
  const { state, actions } = useOvermind();
  const [term, setTerm] = useState('');

  if (state.finnkino.theatreAreas !== null) {
    const matches = Object.values(state.finnkino.theatreAreas)
      .filter((theatreArea) => theatreArea.name.match(RegExp(term, 'i')))
      .slice(0, 5);

    return (
      <Section>
        <SectionTitle id="areaSearchLabel">Hae elokuvateatteria</SectionTitle>
        <Combobox onSelect={actions.finnkino.toggleTheatreArea}>
          <StyledComboboxInput
            onChange={(e) => setTerm((e.target as HTMLInputElement).value)}
            aria-labelledby="areaSearchLabel"
          />
          <StyledComboboxPopover>
            <StyledComboboxList aria-labelledby="areaSearchLabel">
              {matches.map((theatreArea) => (
                <StyledComboboxOption value={theatreArea.name} key={theatreArea.id} />
              ))}
            </StyledComboboxList>
          </StyledComboboxPopover>
        </Combobox>
      </Section>
    );
  } else {
    return (
      <Section>
        <span>Meillä on ongelma</span>
      </Section>
    );
  }
};

export default TheatreAreaSearch;
