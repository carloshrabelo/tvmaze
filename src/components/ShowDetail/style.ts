import ListDOM from "@mui/material/List";
import SkeletonDOM from "@mui/material/Skeleton";
import { styled, css } from "@mui/material/styles";

const IMG_WIDTH_MAX = "320px";
const IMG_WIDTH_MIN = "180px";
const IMG_HEIGHT_MIN = "256px";

const img = css`
  border-radius: 1rem;
  display: block;
  max-width: ${IMG_WIDTH_MAX};
  max-height: ${IMG_HEIGHT_MIN};
  min-width: ${IMG_WIDTH_MIN};
  width: auto;
  height: auto;
`;

export const Card = styled("div")`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;

  ${(props) => props.theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`;

export const Img = styled("img")(img);
export const Skeleton = styled(SkeletonDOM)(img);

export const ImgPlaceholder = styled("div")`
  justify-content: center;
  height: ${IMG_HEIGHT_MIN};
  display: flex;
  align-items: center;

  ${(props) => props.theme.breakpoints.up("sm")} {
    max-width: ${IMG_WIDTH_MAX};
  }
`;

export const List = styled(ListDOM)`
  max-width: 360px;
`;

export const Content = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  justify-content: space-between;
`;
