import { TheatreArea } from './types';
import { parseTheatreAreasXml } from './xmlParsers';

describe('parseTheareAreasXml', () => {
  it('returns correct theatre areas', () => {
    const theatreAreas: TheatreArea[] = [
      {
        name: 'Helsinki',
        id: 0
      },
      {
        name: 'Turku',
        id: 2
      },
      {
        name: 'Pori',
        id: 3
      }
    ];

    const theatreAreasXmlString = `
      <TheatreAreas xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
        <TheatreArea>
          <ID>0</ID>
          <Name>Helsinki</Name>
        </TheatreArea>
        <TheatreArea>
          <ID>2</ID>
          <Name>Turku</Name>
        </TheatreArea>
        <TheatreArea>
          <ID>3</ID>
          <Name>Pori</Name>
        </TheatreArea>
      </TheatreAreas>
      `;

    const domParser = new DOMParser();
    const theatreAreasXml = domParser.parseFromString(theatreAreasXmlString, 'text/xml');

    expect(parseTheatreAreasXml(theatreAreasXml.documentElement)).toEqual(theatreAreas);
  });

  it('Throws an error for invalid XML', () => {
    const xmlMissingId = `
    <TheatreAreas xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <TheatreArea>
        <ID></ID>
        <Name>Helsinki</Name>
      </TheatreArea>
    </TheatreAreas>
    `;

    const xmlMissingElement = `
    <TheatreAreas xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
      <TheatreArea>
        <Name>Helsinki</Name>
      </TheatreArea>
    </TheatreAreas>
    `;

    const domParser = new DOMParser();
    const missingId = domParser.parseFromString(xmlMissingId, 'text/xml');
    const missingElement = domParser.parseFromString(xmlMissingElement, 'text/xml');

    expect(() => parseTheatreAreasXml(missingId.documentElement)).toThrow();
    expect(() => parseTheatreAreasXml(missingElement.documentElement)).toThrow();
  });
});
