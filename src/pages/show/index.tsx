import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import * as S from "./style";
import Cover from "../../components/Cover";
import CoverPlaceholder from "../../components/Cover/placeholder";
import ShowDetail from "../../components/ShowDetail";
import ShowDetailPlaceholder from "../../components/ShowDetail/placeholder";
import { useShowDetailQuery, useShowEpisodesQuery } from "../../store/api";

function Show() {
  const { id } = useParams();
  const { data: show, isLoading: isLoadingShow } = useShowDetailQuery(id!);
  const { data: episodes, isLoading: isLoadingEpisodes } = useShowEpisodesQuery(
    id!
  );

  return (
    <Box p={2}>
      {isLoadingShow ? (
        <ShowDetailPlaceholder />
      ) : (
        <ShowDetail
          rating={show?.rating}
          name={show?.name}
          image={show?.image}
          genres={show?.genres}
          status={show?.status}
          summary={show?.summary}
        />
      )}
      <h1>Episodes</h1>
      <S.Content>
        {isLoadingEpisodes
          ? Array.from({ length: 6 }).map((_, index) => (
              <CoverPlaceholder small key={index} />
            ))
          : episodes?.map((episode) => (
              <Link to={`/episode/${episode.id}`} key={episode.id}>
                <Cover
                  small
                  key={episode.id}
                  rating={episode.rating}
                  name={episode.name}
                  image={episode.image}
                  genres={episode.genres}
                />
              </Link>
            ))}
      </S.Content>
    </Box>
  );
}

export default Show;
