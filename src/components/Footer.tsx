import { BorderButton } from 'components/Button';
import ClapperBoard from 'components/ClapperBoard';
import Link from 'components/Link';
import React, { useState } from 'react';
import styled from 'styled-components';

type FlaticonCreditProps = {
  authorName: string;
  Icon: React.ElementType<any>;
};

const StyledCredit = styled.p`
  display: flex;
  align-items: center;

  > svg {
    height: 1rem;
    margin-right: 0.5rem;
  }
`;

const FlaticonCredit: React.FC<FlaticonCreditProps> = ({ authorName, Icon }) => {
  const authorPathName = authorName.toLowerCase().replace(' ', '-');
  const authorFlaticonUrl = `https://www.flaticon.com/authors/${authorPathName}`;

  return (
    <StyledCredit>
      <Icon />
      <span>
        Icon made by <Link href={authorFlaticonUrl}>{authorName}</Link> from{' '}
        <Link href="https://www.flaticon.com">www.flaticon.com</Link>
      </span>
    </StyledCredit>
  );
};

const StyledCreditList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.75rem;

  button {
    margin: 0 auto;
    font-size: inherit;
  }

  > .list {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  > .list > .credit {
    margin: 1rem 0;
  }
`;

const FlaticonCreditList: React.FC = () => {
  const [isClosed, setIsClosed] = useState(true);

  return (
    <StyledCreditList className="creditlist">
      <BorderButton type="button" onClick={(): void => setIsClosed(!isClosed)}>
        {isClosed ? 'Show icon credits' : 'Hide icon credits'}
      </BorderButton>
      {!isClosed && (
        <div className="list">
          <FlaticonCredit authorName="Pixel perfect" Icon={ClapperBoard} />
        </div>
      )}
    </StyledCreditList>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0;
  color: ${(props) => props.theme.colors.secondary};

  > .creditlist {
    margin-top: 2rem;
  }
`;

const StyledSignature = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin: 0;

  > .heart {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2em;
    padding: 0 0.4em;
  }
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <StyledSignature>
        <span>Made with</span>
        <span className="heart">❤</span>
        <span>by salokristian</span>
      </StyledSignature>
      <FlaticonCreditList />
    </StyledFooter>
  );
};

export default Footer;
