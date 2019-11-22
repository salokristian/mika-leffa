import { css } from 'styled-components';

export const baseInput = css`
  padding: 0.5em 0.7em;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.secondaryDark};
  outline: none;
  font-size: 1.1rem;
  opacity: 0.7;
  transition: opacity ease-in-out 0.3s;

  &:focus {
    opacity: 1;
  }
`;
