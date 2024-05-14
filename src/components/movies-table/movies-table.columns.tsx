import { Typography } from "@mui/material";
import { GridColDef, GridColumnHeaderParams } from "@mui/x-data-grid";

const HeaderCell = (params: GridColumnHeaderParams) => {
  return <Typography fontWeight={600}>{params.colDef.headerName}</Typography>;
};

const defaultConfig: Partial<GridColDef> = {
  flex: 0.5,
  sortable: false,
  renderHeader: HeaderCell,
};

export const getMoviesTableColumns = () => {
  return [
    {
      field: "id",
      headerName: "ID",
      ...defaultConfig,
    },
    {
      field: "title",
      headerName: "Title",
      ...defaultConfig,
    },
    {
      field: "releaseDate",
      headerName: "Release Date",
      ...defaultConfig,
    },
    {
      field: "genre",
      headerName: "Genre",
      ...defaultConfig,
    },
    {
      field: "rating",
      headerName: "Rating",
      ...defaultConfig,
    },
  ];
};
