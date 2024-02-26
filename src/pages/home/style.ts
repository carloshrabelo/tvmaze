import { styled } from "@mui/material/styles";

export const Content = styled("main")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
  gap: ${(props) => props.theme.spacing(2)};
`;
