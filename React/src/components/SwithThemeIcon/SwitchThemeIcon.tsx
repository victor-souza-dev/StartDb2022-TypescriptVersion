import { IconButtonStyled } from "../Header/IconButtonStyled";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { SwitchThemeContext } from "../../contexts/SwitchTheme/SwitchThemeContext";

export function SwitchThemeIcon(): JSX.Element {
  const { isDarkTheme, toggleTheme } = useContext(SwitchThemeContext);
  const themeIcon = isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />;

  return (
    <Grid container justifyContent={"flex-end"}>
      <IconButtonStyled
        size="small"
        edge="start"
        aria-label="open drawer"
        sx={{ m: 1, p: 1 }}
        onClick={toggleTheme}
      >
        {themeIcon}
      </IconButtonStyled>
    </Grid>
  );
}
