import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonSendStyle = styled(Button)(({ theme }) => ({
  minWidth: "0 !important",
  display: "flex",
  width: "40px",
  height: "40px",
  borderRadius: "20px !important",
  marginLeft: "10px !important",
  padding: "5px !important",
}));
