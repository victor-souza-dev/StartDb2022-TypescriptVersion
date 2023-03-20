import MenuIcon from "@mui/icons-material/Menu";
import { IconButtonStyled } from "../Header/IconButtonStyled";
import { useState } from "react";
import { DrawerStyle } from "./DrawerStyle";
import { HeaderSidebar } from "../HeaderSidebar/HeaderSidebar";
import { SwitchThemeIcon } from "../SwithThemeIcon/SwitchThemeIcon";

export function Sidebar(): JSX.Element {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div>
      <IconButtonStyled
        size="large"
        edge="start"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={() => setSidebar(!sidebar)}
      >
        <MenuIcon />
      </IconButtonStyled>
      <DrawerStyle open={sidebar} onClose={() => setSidebar(false)}>
        <HeaderSidebar closedSidebar={setSidebar} />
        <SwitchThemeIcon />
      </DrawerStyle>
    </div>
  );
}
