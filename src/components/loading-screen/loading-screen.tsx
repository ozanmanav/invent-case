import { CircularProgress } from "@mui/material";
import * as S from "./loading-screen.styled";

export const LoadingScreen = () => {
  return (
    <S.StyledBox>
      <CircularProgress />
    </S.StyledBox>
  );
};
