import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

export const SkeletonStyle = styled(Skeleton)(({ theme }) => ({
  backgroundColor: `${theme.colors.border} !important`,
}));
