import { WinsStyle } from "./WinsStyle";
import { GlobalLoadingContext } from "../../contexts/GlobalLoading/GlobalLoadingContext";
import { useContext } from "react";
import { SkeletonStyle } from "../../styles/SkeletonStyle";

export function Wins(): JSX.Element {
  const { loading } = useContext(GlobalLoadingContext);

  return (
    <>
      {loading ? (
        <SkeletonStyle width={60} variant="text" sx={{ fontSize: "2rem" }} />
      ) : (
        <WinsStyle>Wins: {0}</WinsStyle>
      )}
    </>
  );
}
