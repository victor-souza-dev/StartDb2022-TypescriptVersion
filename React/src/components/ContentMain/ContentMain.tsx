import { CardChat } from "../CardChat/CardChat";
import { SecretWord } from "../SecretWord/SecretWord";
import { GridContainerStyles } from "./styles/GridContainerStyles";
import { GridItemStyle } from "./styles/GridItemStyle";

export function Main(): JSX.Element {
  return (
    <GridContainerStyles container>
      <GridItemStyle item xs={6}>
        <SecretWord />
      </GridItemStyle>
      <GridItemStyle item xs={4}>
        <CardChat />
      </GridItemStyle>
    </GridContainerStyles>
  );
}
