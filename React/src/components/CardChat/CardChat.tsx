import { Fragment } from "react";
import { PaperStyled } from "./styles/PaperStyle";
import { TitlePaperStyle } from "./styles/TitlePaperStyle";
import { TextContentPaperStyle } from "./styles/TextContentPaperStyle";
import { CardStyle } from "./styles/CardStyle";
import { CardContentStyle } from "./styles/CardContentStyle";
import { TextFieldCardStyle } from "./styles/TextFieldCardStyle";
import { DividerStyle } from "./styles/DividerStyle";
import SendIcon from "@mui/icons-material/Send";
import { FormSendLetterStyle } from "./styles/FormSendLetterStyle";
import { ButtonSendStyle } from "./styles/ButtonSendStyle";
import { GlobalLoadingContext } from "../../contexts/GlobalLoading/GlobalLoadingContext";
import { useContext } from "react";
import { SkeletonStyle } from "../../styles/SkeletonStyle";

export function CardChat(): JSX.Element {
  const { loading } = useContext(GlobalLoadingContext);
  return (
    <div>
      {loading ? (
        <SkeletonStyle
          width={306}
          height={330}
          variant="rounded"
          sx={{ fontSize: "2rem", mt: 3 }}
        />
      ) : (
        <>
          <TitlePaperStyle variant="caption">Letras Chutadas</TitlePaperStyle>
          <CardStyle>
            <CardContentStyle>
              <PaperStyled variant="outlined" square>
                {[
                  "teste1",
                  "teste2",
                  "teste3",
                  "teste4",
                  "teste5",
                  "teste6",
                ].map((value) => (
                  <Fragment key={value}>
                    <TextContentPaperStyle variant="subtitle1">
                      {value}
                    </TextContentPaperStyle>
                    <DividerStyle sx={{ marginBottom: "5px" }}></DividerStyle>
                  </Fragment>
                ))}
              </PaperStyled>
              <FormSendLetterStyle>
                <TextFieldCardStyle
                  size={"small"}
                  id="outlined-basic"
                  label="Insira uma letra"
                  variant="filled"
                />
                <ButtonSendStyle type="submit" variant="contained">
                  <SendIcon sx={{ width: "20px" }} />
                </ButtonSendStyle>
              </FormSendLetterStyle>
            </CardContentStyle>
          </CardStyle>
        </>
      )}
    </div>
  );
}
