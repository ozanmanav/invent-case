import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { GridPaginationModel, GridRowParams } from "@mui/x-data-grid";
import { getMoviesTableColumns } from "./movies-table.columns";
import { useLazyGetMoviesQuery } from "../../api/appApi";
import { transformMoviesTableData } from "../../utils/transformMoviesTableData";
import { StyledDataGrid } from "./movies-table.styled";

export const MoviesTable: React.FC = () => {
  const navigate = useNavigate();
  const [getMoviesQuery, { data, isFetching, error }] = useLazyGetMoviesQuery();
  const rows = transformMoviesTableData(data?.Search || []);
  const columns = getMoviesTableColumns();
  const [page, setPage] = useState(0);
  console.log(data);

  useEffect(() => {
    getMoviesQuery({ input: "Pokemon", page: page + 1 });
  }, [page]);

  const handlePaginationModelChange = ({ page }: GridPaginationModel) => {
    setPage(page);
  };

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/movies/${params.id}`);
  };

  if (error) return <div>Something went wrong.</div>;

  return (
    <StyledDataGrid
      rows={rows}
      columns={columns}
      rowCount={parseInt(data?.totalResults || "0")}
      paginationMode="server"
      pageSizeOptions={[10]}
      paginationModel={{ page, pageSize: 10 }}
      onPaginationModelChange={handlePaginationModelChange}
      loading={isFetching}
      onRowClick={handleRowClick}
    />
  );
};
