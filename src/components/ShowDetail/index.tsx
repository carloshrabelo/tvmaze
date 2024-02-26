import Chip from "@mui/material/Chip";
import { yellow } from "@mui/material/colors";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Star } from "lucide-react";

import * as S from "./style";
import { Show } from "../../types";

export default function ShowDetail(data: Partial<Show>) {
  return (
    <S.Card>
      <S.ImgPlaceholder>
        {data.image ? (
          <S.Img src={data.image} alt={data.name} />
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
          <Typography variant="h1">{data.name}</Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {data.genres?.map((genre: string) => (
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
            <ListItem disablePadding>
              <ListItemText primary="Rating" />
              <ListItemText>
                <Star fill={yellow[500]} color={yellow[600]} size="1rem" />{" "}
                {data.rating}
              </ListItemText>
            </ListItem>
            {!data?.status ? null : (
              <ListItem disablePadding>
                <ListItemText primary="Status" />
                <ListItemText primary={data?.status} />
              </ListItem>
            )}
          </S.List>
        </S.Content>
        <Typography variant="body1">{data.summary}</Typography>
      </S.Content>
    </S.Card>
  );
}
