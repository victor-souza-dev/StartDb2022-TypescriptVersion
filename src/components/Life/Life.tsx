import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalLoadingContext } from "../../contexts/GlobalLoading/GlobalLoadingContext";
import { BoxLifesStyle } from "./styles/BoxLifesStyle";
import { RatingLifesStyled } from "./styles/RatingLifesStyle";
import { useContext } from "react";
import { SkeletonStyle } from "../../styles/SkeletonStyle";

export function Life(): JSX.Element {
  const { loading } = useContext(GlobalLoadingContext);

  return (
    <BoxLifesStyle>
      {loading ? (
        <SkeletonStyle width={150} variant="rounded" />
      ) : (
        <RatingLifesStyled
          name="customized-color"
          max={6}
          value={6}
          defaultValue={6}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? "s" : ""}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
      )}
    </BoxLifesStyle>
  );
}
