import { styled } from "@mui/material/styles";

export const Content = styled("main")`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: ${(props) => props.theme.spacing(2)};
  grid-template-columns: repeat(auto-fit, minmax(360px, auto));
`;
