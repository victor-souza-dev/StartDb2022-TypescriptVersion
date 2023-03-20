import styled from "styled-components";
import { Divider } from "@mui/material";

export const DividerStyle = styled(Divider)(({ theme }) => ({
  backgroundColor: theme.colors.textColor,
}));
