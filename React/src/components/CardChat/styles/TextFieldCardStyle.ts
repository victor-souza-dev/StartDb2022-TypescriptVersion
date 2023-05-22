import { TextField } from "@mui/material";
import styled from "styled-components";

export const TextFieldCardStyle = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.colors.textColor,
    fontSize: "14px",
    top: "-1px",
  },
  "& .MuiInputBase-input": {
    height: "17px",
    color: theme.colors.textColor,
    borderRadius: "5px",
    backgroundColor: theme.name === "dark" ? theme.colors.border : "",
    caretColor: "transparent",
  },
  ...(theme.name === "dark"
    ? {
        "& .MuiFilledInput-root": {
          "&::after": {
            borderBottom: `1px solid ${theme.colors.textColor}`,
          },
        },
        "& .MuiInputLabel-root": {
          "&.Mui-focused": {
            color: theme.colors.textColor,
          },
        },
      }
    : ""),
}));
