import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Life } from "../Life/Life";
import { Wins } from "../Wins/Wins";
import { Sidebar } from "../Sidebar/Sidebar";

export function Header(): JSX.Element {
  return (
    <Box sx={{ width: "100%" }}>
      <AppBar position="static" color={"transparent"}>
        <Toolbar>
          <Sidebar></Sidebar>
          <Life />
          <Wins />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
