import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { Grid, Box } from "@mui/material";
import { DividerStyle } from "../CardChat/styles/DividerStyle";
import { IconButtonStyled } from "../Header/IconButtonStyled";

type PropsHeaderSidebar = {
  closedSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export function HeaderSidebar({
  closedSidebar,
}: PropsHeaderSidebar): JSX.Element {
  return (
    <Box>
      <Grid container justifyContent={"flex-end"}>
        <IconButtonStyled
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ m: 1, p: 1 }}
          onClick={() => closedSidebar(false)}
        >
          <NavigateBeforeIcon />
        </IconButtonStyled>
      </Grid>
      <DividerStyle />
    </Box>
  );
}
