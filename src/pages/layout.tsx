import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Tv } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Button
            color="inherit"
            startIcon={<Tv />}
            component={Link}
            to="/"
            sx={{
              alignItems: "flex-end"
            }}
          >
            <Typography variant="h3" component="h1">
              Tv Maze
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}
