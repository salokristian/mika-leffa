import ClapperBoard from 'components/ClapperBoard';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  margin: 3rem;

  > svg {
    height: 7rem;
  }
`;

const TitleWrapper = styled.div`
  /* Use negative margin to align the baseline of heading text with the clapperboard icon */
  margin: 0 0 -1rem 2rem;
  user-select: none;
`;

const StyledH1 = styled.h1`
  margin: 0;
  line-height: 0.9;
  font-size: 4rem;
  font-weight: 200;
  text-transform: uppercase;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <ClapperBoard />
      <TitleWrapper>
        <StyledH1>
          <div>Mikä</div>
          <div>leffa</div>
        </StyledH1>
      </TitleWrapper>
    </StyledHeader>
  );
};

export { Header as default, StyledHeader };
