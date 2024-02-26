export type ShowAPI = {
  id: number;
  rating: {
    average?: number;
  };
  name: string;
  image?: {
    medium: string;
  };
  genres: string[];
  status: string;
  summary: string | null;
};

export type ShowListAPI = {
  show: ShowAPI;
};

export type EpisodeAPI = {
  id: number;
  rating: {
    average?: number;
  };
  name: string;
  image?: {
    medium: string;
  };
  genres: string[];
  season: string;
  number: number;
  summary: string;
};
