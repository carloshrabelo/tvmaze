import Skeleton from "@mui/material/Skeleton";

import * as S from "./style";

export default function CoverPlaceholder({ small }: { small?: boolean }) {
  return (
    <S.Card styled={{ small }}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        animation="pulse"
      />
    </S.Card>
  );
}
