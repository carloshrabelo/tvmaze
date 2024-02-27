import Chip from "@mui/material/Chip";
import { yellow } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Star } from "lucide-react";

import * as S from "./style";
import { Show } from "../../types";

type Props = Pick<Show, "rating" | "name" | "image" | "genres"> & {
  small?: boolean;
};

export default function Cover({ small, rating, name, image, genres }: Props) {
  return (
    <S.Card styled={{ small }}>
      {image ? (
        <S.CardMedia image={image} title={name} />
      ) : (
        <Skeleton
          sx={{ bgcolor: "grey.500" }}
          variant="rectangular"
          width="100%"
          height="100%"
          animation={false}
          data-testid="skeleton"
        />
      )}
      <S.Header>
        <Star fill={yellow[500]} color={yellow[600]} size="1rem" />
        {rating}
      </S.Header>
      <S.Content>
        <Typography variant="h2" component="h1">
          {name}
        </Typography>
        <Stack direction="row" spacing={1}>
          {genres?.map((genre: string) => (
            <Chip
              key={genre}
              label={genre}
              color="secondary"
              size="small"
              variant="filled"
            />
          ))}
        </Stack>
      </S.Content>
    </S.Card>
  );
}
