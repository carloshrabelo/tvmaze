import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import * as S from "./style";

export default function ShowDetailPlaceholder() {
  return (
    <S.Card>
      <S.ImgPlaceholder>
        <S.Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          animation={false}
          data-testid="skeleton"
        />
      </S.ImgPlaceholder>
      <S.Content>
        <S.Content>
          <Typography variant="h1">
            <Skeleton width="7rem" />
          </Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                width={4 / (index + 1) + 1 + "rem"}
                height="2rem"
              />
            ))}
          </Stack>
          <S.List>
            {Array.from({ length: 2 }).map((_, key) => (
              <ListItem disablePadding key={key}>
                <ListItemText>
                  <Skeleton width="4rem" />
                </ListItemText>
                <ListItemText>
                  <Skeleton width="4rem" />
                </ListItemText>
              </ListItem>
            ))}
          </S.List>
        </S.Content>
        <Typography variant="body1">
          <Skeleton />
          <Skeleton width="60%" />
        </Typography>
      </S.Content>
    </S.Card>
  );
}
