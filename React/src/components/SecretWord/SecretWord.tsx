import Typography from "@mui/material/Typography";
import { GlobalLoadingContext } from "../../contexts/GlobalLoading/GlobalLoadingContext";
import { useContext } from "react";
import { SkeletonStyle } from "../../styles/SkeletonStyle";

export function SecretWord(): JSX.Element {
  const { loading } = useContext(GlobalLoadingContext);
  return (
    <>
      {loading ? (
        <SkeletonStyle width={80} variant="text" sx={{ fontSize: "2rem" }} />
      ) : (
        <Typography>_ _ _ _ _ _</Typography>
      )}
    </>
  );
}
