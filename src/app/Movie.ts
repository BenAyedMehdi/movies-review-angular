export interface Movie {
  id: number;
  name: string;
  year: string;
  director: string;
  stars: string;
  writers: string;
  imgUrl: string;
  review: string;
  ratings: {
    directing: number;
    acting: number;
    costumeDesign: number;
    editing: number;
    music: number;
    visualEffects: number;
    screenplay: number;
  };
}
