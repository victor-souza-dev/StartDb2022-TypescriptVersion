import { IconButton } from "@mui/material";
import styled from "styled-components";

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  "&.MuiIconButton-root": {
    color: theme.colors.title,
  },
}));
