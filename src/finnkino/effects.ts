import myFetch from 'common/myFetch';
import { TheatreArea } from './types';
import { parseTheatreAreasXml } from './xmlParsers';

export const getTheatreCities = async (): Promise<TheatreArea[]> => {
  const fetched = await myFetch('https://www.finnkino.fi/xml/TheatreAreas/');

  if (fetched.ok) {
    const domParser = new DOMParser();

    const xmlString = await fetched.res.text();
    const xmlDoc = domParser.parseFromString(xmlString, 'text/xml');
    return parseTheatreAreasXml(xmlDoc.documentElement);
  }

  return [];
};
