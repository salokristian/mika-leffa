import styled from 'styled-components';

const Link = styled.a`
  color: ${(props) => props.theme.colors.primaryLight};

  :visited {
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export default Link;
