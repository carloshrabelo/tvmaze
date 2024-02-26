export type Show = {
  id: number;
  rating: string;
  name: string;
  image?: string;
  genres: string[];
  status: string;
  summary: string;
};

export type Episode = {
  id: number;
  rating: string;
  name: string;
  image?: string;
  genres: string[];
  season: string;
  number: number;
  summary: string;
};
