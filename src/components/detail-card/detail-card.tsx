import { ReactNode } from "react";
import * as S from "./detail-card.styled";

type CardProps = {
  title: string;
  text: string;
  element: ReactNode;
};

export const DetailCard: React.FC<CardProps> = ({ title, text, element }) => {
  return (
    <S.StyledRootBox>
      <S.StyledInnerBox>
        {element}
        <S.StyledTitleTypography variant="body1">
          {title}
        </S.StyledTitleTypography>
      </S.StyledInnerBox>

      {text !== "N/A" ? (
        <S.StyledTextTypography>{text}</S.StyledTextTypography>
      ) : (
        <S.StyledTextTypography>Data not found.</S.StyledTextTypography>
      )}
    </S.StyledRootBox>
  );
};
