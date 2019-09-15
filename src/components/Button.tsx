import styled from 'styled-components';

const BorderButton = styled.button`
  color: ${(props) => props.theme.colors.secondary};
  border: 1px solid;
  background-color: inherit;
  padding: 0.5em 0.7em;
  font-size: 1rem;
  cursor: pointer;
`;

export { BorderButton };
