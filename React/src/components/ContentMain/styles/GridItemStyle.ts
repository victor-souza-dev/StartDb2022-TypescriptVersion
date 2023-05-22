import styled from "styled-components";
import Grid from "@mui/material/Grid";

export const GridItemStyle = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  color: theme.colors.title,
  "&:first-child": {
    marginRight: "10vw",
  },
}));
