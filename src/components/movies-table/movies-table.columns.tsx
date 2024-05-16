import { GridColDef } from "@mui/x-data-grid";
import { HeaderCell } from "./table-cells/header-cell";
import { AvatarCell } from "./table-cells/avatar-cell";

const defaultConfig: Partial<GridColDef> = {
  flex: 0.5,
  sortable: false,
  filterable: false,
  disableColumnMenu: true,
  renderHeader: HeaderCell,
};

export const getMoviesTableColumns = () => {
  return [
    {
      field: "Poster",
      headerName: "Poster",
      ...defaultConfig,
      renderCell: AvatarCell,
    },
    {
      field: "imdbID",
      headerName: "ID",
      ...defaultConfig,
    },
    {
      field: "Title",
      headerName: "Title",
      ...defaultConfig,
    },
    {
      field: "Year",
      headerName: "Year",
      ...defaultConfig,
    },
    {
      field: "Type",
      headerName: "Type",
      ...defaultConfig,
    },
  ];
};
