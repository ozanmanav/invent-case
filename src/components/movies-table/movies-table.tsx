import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useNavigate } from "react-router";
import { GridPaginationModel, GridRowParams } from "@mui/x-data-grid";
import { getMoviesTableColumns } from "./movies-table.columns";
import { useLazyGetMoviesQuery } from "../../api/appApi";
import { transformMoviesTableData } from "../../utils/transformMoviesTableData";
import * as S from "./movies-table.styled";

import useLocalStorage from "../hooks/useLocalStorage";
import { useHandleChange } from "../hooks/useHandleChange";
import { MovieSearchTextField } from "../movie-search-text-field/movie-search-text-field";
import { YearsDropdown } from "../years-drowpdown/years-dropdown";
import { SelectChangeEvent } from "@mui/material";

export const MoviesTable: React.FC = () => {
  const columns = getMoviesTableColumns();
  const navigate = useNavigate();

  const [input, setInput] = useLocalStorage("input", "Pokemon");
  const [page, setPage] = useLocalStorage("page", 0);
  const [selectedYear, setSelectedYear] = useLocalStorage("selectedYear", "");

  const [getMoviesQuery, { data, isFetching, error }] = useLazyGetMoviesQuery();
  const rows = transformMoviesTableData(data?.Search || []);

  const getMovies = () =>
    getMoviesQuery({ input: input, page: page + 1, year: selectedYear });

  const debouncedGetMovies = useDebouncedCallback(
    () => {
      getMovies();
    },
    500,
    { maxWait: 2000 }
  );

  useEffect(() => {
    debouncedGetMovies();
  }, [input, page, selectedYear]);

  const handlePaginationModelChange = ({ page }: GridPaginationModel) => {
    setPage(page);
  };

  const clearSearch = () => setInput("");

  const handleSearch = useHandleChange<string>(setInput);

  const handleYearChange = (event: SelectChangeEvent<unknown>) => {
    if (event.target.value === "Select No filter") {
      setSelectedYear("");
      return;
    }
    setSelectedYear(event.target.value as string);
  };

  const handleRowClick = (params: GridRowParams) => {
    navigate(`/movies/${params.id}`);
  };

  if (error) return <>Something went wrong.</>;

  return (
    <>
      <S.StyledBox>
        <MovieSearchTextField
          input={input}
          handleSearch={handleSearch}
          isFetching={isFetching}
          clearSearch={clearSearch}
        />

        <YearsDropdown
          handleChange={handleYearChange}
          selectedYear={selectedYear}
        />
      </S.StyledBox>

      <S.StyledDataGrid
        rows={rows}
        columns={columns}
        rowCount={parseInt(data?.totalResults || "0")}
        paginationMode="server"
        pageSizeOptions={[10]}
        paginationModel={{ page: page, pageSize: 10 }}
        onPaginationModelChange={handlePaginationModelChange}
        loading={isFetching}
        onRowClick={handleRowClick}
      />
    </>
  );
};
