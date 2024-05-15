import { Box, styled, Typography } from "@mui/material";

export const StyledRootBox = styled(Box)({
  display: "flex",
  flexDirection: "column",

  backgroundColor: "aliceblue",
  borderRadius: "10px",
  height: "200px",
  width: "400px",
});

export const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginTop: "10px",
  marginLeft: "10px",
});

export const StyledTitleTypography = styled(Typography)({
  marginLeft: "10px",
  fontWeight: 600,
});

export const StyledTextTypography = styled(Typography)({
  marginLeft: "10px",
  fontSize: "18px",
});
