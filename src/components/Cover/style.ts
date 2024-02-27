import CardDOM from "@mui/material/Card";
import CardMediaDOM from "@mui/material/CardMedia";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const Card = styled(CardDOM)<{ styled?: { small?: boolean } }>`
  cursor: pointer;

  position: relative;

  min-height: ${(props) => (props?.styled?.small ? "180px" : "360px")};

  border-radius: 1rem;
  box-shadow: none;

  &::after {
    content: "";

    position: absolute;
    z-index: 1;
    bottom: 0;

    display: block;

    width: 100%;
    height: 64%;

    background: linear-gradient(to top, ${grey[900]}, #0000);
  }

  &:hover::after {
    background: linear-gradient(to top, ${grey[700]}, #0000);
  }
`;

export const CardMedia = styled(CardMediaDOM)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-position: top;
`;

export const Content = styled("div")`
  position: absolute;
  z-index: 2;
  bottom: 0;

  width: 100%;
  padding: ${({ theme }) => theme.spacing(3, 2)};

  color: white;
`;

export const Header = styled("div")`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;

  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;

  margin: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(1)};

  color: white;

  background: #00000080;
  border-radius: 1rem;
`;
