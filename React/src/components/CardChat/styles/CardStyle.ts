import { Card } from "@mui/material";
import styled from "styled-components";

export const CardStyle = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: "5px",
  "&.MuiCard-root": {
    backgroundColor: "transparent",
    boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px ${theme.colors.border}`,
  },
}));
