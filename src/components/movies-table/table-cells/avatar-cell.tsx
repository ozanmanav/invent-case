import { Avatar } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

export const AvatarCell = (params: GridRenderCellParams) => {
  if (params.value === "N/A") {
    return null;
  }
  return (
    <Avatar
      variant="square"
      src={params.value as string}
      sx={{ marginTop: "5px", width: 40, height: 40 }}
    />
  );
};
