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
};

export type ShowListAPI = {
  show: ShowAPI;
};
