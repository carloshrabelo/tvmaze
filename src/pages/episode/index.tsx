import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

import ShowDetail from "../../components/ShowDetail";
import ShowDetailPlaceholder from "../../components/ShowDetail/placeholder";
import { useEpisodeDetailQuery } from "../../store/api";

function EpisodeDetails() {
  const { id } = useParams();
  const { data, isLoading } = useEpisodeDetailQuery(id!);

  return (
    <Box p={2}>
      {isLoading ? (
        <ShowDetailPlaceholder />
      ) : (
        <ShowDetail
          rating={data?.rating}
          name={data?.name}
          image={data?.image}
          genres={data?.genres}
          summary={data?.summary}
          season={data?.season}
          number={data?.number}
        />
      )}
    </Box>
  );
}

export default EpisodeDetails;
