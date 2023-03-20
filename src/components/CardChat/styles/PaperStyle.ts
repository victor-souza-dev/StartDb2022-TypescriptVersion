import { Paper } from "@mui/material";
import styled from "styled-components";

export const PaperStyled = styled(Paper)(({ theme }) => ({
  marginBottom: "20px",
  padding: "10px",
  overflowY: "auto",
  backgroundColor: "transparent !important",
  boxShadow: `0px 0px 1px -1px rgba(0,0,0,0.2), 0px 0px 1px 0px rgba(0,0,0,0.14), 0px 0px 5px 0px ${theme.colors.border}`,
  "&::-webkit-scrollbar": {
    width: "3px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#EDEDED",
    borderRadius: "5px",
  },
}));
