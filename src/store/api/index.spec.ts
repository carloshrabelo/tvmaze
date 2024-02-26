import { episodeApi } from "../../mock/Api/episodeApi";
import { showApi } from "../../mock/Api/show";
import { episode } from "../../mock/episode";
import { show } from "../../mock/show";

import { parserShow, parserEpisode } from "./index";

describe("parserShow function", () => {
  test("parses show data correctly", () => {
    const parsedShow = parserShow(showApi);
    expect(parsedShow).toEqual(show);
  });

  test("handles missing rating correctly", () => {
    const parsedShow = parserShow({
      ...showApi,
      rating: {}
    });

    expect(parsedShow.rating).toBe("N/A");
  });
});

describe("parserEpisode function", () => {
  test("parses episode data correctly", () => {
    const parsedEpisode = parserEpisode(episodeApi);
    expect(parsedEpisode).toEqual(episode);
  });

  test("handles missing rating correctly", () => {
    const parsedEpisode = parserEpisode({
      ...episodeApi,
      rating: {}
    });

    expect(parsedEpisode.rating).toBe("N/A");
  });
});
