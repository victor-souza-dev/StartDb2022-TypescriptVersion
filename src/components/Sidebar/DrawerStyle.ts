import { Drawer } from "@mui/material";
import styled from "styled-components";

export const DrawerStyle = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "200px",
    backgroundColor: theme.colors.backgroundColor,
  },
}));
