import { EpisodeAPI } from "../../types/api";

export const episodeApi: EpisodeAPI = {
  id: 1,
  rating: { average: 8.5 },
  name: "Test Episode",
  image: { medium: "test.jpg" },
  genres: ["Drama", "Thriller"],
  season: "3",
  number: 1,
  summary: "<p>Loki finds himself.</p>"
};
