import { Typography } from "@mui/material";
import { GridColumnHeaderParams } from "@mui/x-data-grid";

export const HeaderCell = (params: GridColumnHeaderParams) => {
  return <Typography fontWeight={600}>{params.colDef.headerName}</Typography>;
};
