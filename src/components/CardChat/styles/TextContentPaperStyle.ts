import { Typography } from "@mui/material";
import styled from "styled-components";

export const TextContentPaperStyle = styled(Typography)(({ theme }) => ({
  color: theme.colors.textColor,
  cursor: "default",
  caretColor: "transparent",
}));
