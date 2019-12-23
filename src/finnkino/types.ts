export interface TheatreArea {
  readonly name: string;
  readonly id: number;
}

export interface TheatreAreas {
  [id: number]: TheatreArea;
}
