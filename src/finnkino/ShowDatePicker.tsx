import React from 'react';
import styled from 'styled-components';
import SectionTitle from 'components/SectionTitle';
import Section from 'components/Section';
import { useOvermind } from 'overmind-app';

const firstLineItems = 3;

const StyledShowDatePicker = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
`;

const ShowDate = styled.button`
  padding: 0.5rem;
  background-color: inherit;
  border: 2px solid transparent;
  font-weight: 300;
  transition: background-color ease-in-out 0.1s;

  &.selected {
    border: 2px solid ${(props) => props.theme.colors.secondaryLight};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.secondaryDark};
  }

  &.focus-visible {
    outline: none;
    text-decoration: underline;
  }
`;

const Divider = styled.div`
  width: 1px;
  margin: 0 0.5rem;
  background-color: ${(props) => props.theme.colors.secondaryLight};
`;

const Break = styled.div`
  height: 1rem;
  flex-basis: 100%;
`;

// Just get the next 7 days even though they are not always all available
// See: https://www.finnkino.fi/faq -> "Milloin elokuvien näytösajat julkaistaan?"
const getAvailableShowDates = (): Date[] => {
  return Array.from({ length: 7 }, (_, idx) => {
    const date = new Date();
    date.setDate(date.getDate() + idx);

    return date;
  });
};

const ShowDatePicker: React.FC = () => {
  const { state, actions } = useOvermind();
  const { isShowDateSelected } = state.finnkino;
  const showDates = getAvailableShowDates();

  return (
    <Section>
      <SectionTitle id="ShowDatePickerLabel">Valitse näytöspäivät</SectionTitle>
      <StyledShowDatePicker>
        {showDates.map((showDate, idx, arr) => (
          <>
            <ShowDate
              className={isShowDateSelected(showDate) ? 'selected' : undefined}
              aria-selected={isShowDateSelected(showDate)}
              aria-labelledby="ShowDatePickerLabel"
              onClick={() => actions.finnkino.toggleShowDate(showDate)}
            >
              {showDate.toLocaleDateString(undefined, {
                weekday: 'short',
                day: 'numeric',
                month: 'numeric'
              })}
            </ShowDate>
            {idx !== arr.length - 1 && idx !== firstLineItems - 1 && <Divider />}
            {idx === firstLineItems - 1 && <Break />}
          </>
        ))}
      </StyledShowDatePicker>
    </Section>
  );
};

export default ShowDatePicker;
