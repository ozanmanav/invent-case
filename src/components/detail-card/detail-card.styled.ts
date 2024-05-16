import { Box, Card, styled, Typography } from "@mui/material";

export const StyledRootBox = styled(Card)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "aliceblue",
  borderRadius: "10px",
  height: "200px",
});

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: "10px",
});

export const StyledTitleTypography = styled(Typography)({
  marginLeft: "10px",
  fontWeight: 600,
});

export const StyledTextTypography = styled(Typography)({
  fontSize: "18px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "5",
  WebkitBoxOrient: "vertical",
});
