import myFetch from 'components/common/myFetch';

interface TheatreArea {
  name: string;
  id: number;
}

const parseTheatreAreaXML = (theatreAreaXML: Element): TheatreArea | null => {
  const idNode = theatreAreaXML.children[0];
  const nameNode = theatreAreaXML.children[1];

  const id = idNode.textContent !== null && parseInt(idNode.textContent);
  const name = nameNode.textContent !== null && nameNode.textContent;

  if (id && name) {
    return { name, id };
  }
  return null;
};

const parseTheatreAreasXML = (theatreAreasXml: HTMLElement): TheatreArea[] => {
  return Array.from(theatreAreasXml.children)
    .map(parseTheatreAreaXML)
    .filter((theatreArea): theatreArea is TheatreArea => theatreArea !== null);
};

export const getTheatreCities = async (): Promise<TheatreArea[]> => {
  const fetched = await myFetch('https://www.finnkino.fi/xml/TheatreAreas/');

  if (fetched.ok) {
    const domParser = new DOMParser();

    const xmlString = await fetched.res.text();
    const xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
    return parseTheatreAreasXML(xmlDoc.documentElement);
  }

  return [];
};
