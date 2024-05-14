import { styled } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { getMoviesTableColumns } from "./movies-table.columns";

const StyledDataGrid = styled(DataGrid)({
  height: 600,
  width: "100%",
});

export const MoviesTable: React.FC = () => {
  const columns = getMoviesTableColumns();

  return <StyledDataGrid rows={[]} columns={columns} />;
};
