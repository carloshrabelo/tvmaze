import Chip from "@mui/material/Chip";
import { yellow } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Star } from "lucide-react";

import * as S from "./style";
import { Episode, Show } from "../../types";

export default function ShowDetail({
  image,
  name,
  genres,
  rating,
  status,
  season,
  number,
  summary
}: Partial<Show & Episode>) {
  const dataList = [
    [
      "Rating",
      <>
        <Star fill={yellow[500]} color={yellow[600]} size="1rem" /> {rating}
      </>
    ],
    ["Status", status],
    ["Season", season],
    ["Number", number]
  ].filter(([_label, value]) => !!value);

  return (
    <S.Card>
      <S.ImgPlaceholder>
        {image ? (
          <S.Img src={image} alt={name} />
        ) : (
          <S.Skeleton
            sx={{ bgcolor: "grey.500" }}
            variant="rectangular"
            width="100%"
            height="100%"
            animation={false}
            data-testid="skeleton"
          />
        )}
      </S.ImgPlaceholder>
      <S.Content>
        <S.Content>
          <Typography variant="h1">{name}</Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
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
          <S.List>
            {dataList.map(([label, value], key) => (
              <ListItem disablePadding key={key}>
                <ListItemText primary={label} />
                <ListItemText primary={value} />
              </ListItem>
            ))}
          </S.List>
        </S.Content>
        <Typography variant="body1">{summary}</Typography>
      </S.Content>
    </S.Card>
  );
}
