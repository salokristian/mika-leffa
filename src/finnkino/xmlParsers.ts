import { isDefined } from 'components/common/ts-utils';
import { TheatreArea } from './types';

const parseTheatreAreaXml = (theatreAreaXml: Element): TheatreArea => {
  const idNode = theatreAreaXml.children[0];
  const id = isDefined<string>(idNode.textContent) ? parseInt(idNode.textContent) : NaN;
  const name = theatreAreaXml.children[1].textContent;

  if (!Number.isNaN(id) && isDefined<string>(name)) {
    return { name, id };
  }
  throw new Error(`Invalid theatre area XML: ${theatreAreaXml.textContent}`);
};

const parseTheatreAreasXml = (theatreAreasXml: HTMLElement): TheatreArea[] => {
  return Array.from(theatreAreasXml.children).map(parseTheatreAreaXml);
};

export { parseTheatreAreasXml };
