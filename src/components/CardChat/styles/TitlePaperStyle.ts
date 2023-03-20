import { Typography } from "@mui/material";
import styled from "styled-components";

export const TitlePaperStyle = styled(Typography)(({ theme }) => ({
  position: "relative",
  top: "14px",
  left: "10px",
  backgroundColor: theme.colors.backgroundColor,
  padding: "0 5px",
  color: theme.colors.title,
  cursor: "default",
}));
