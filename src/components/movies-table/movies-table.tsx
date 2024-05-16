import { useEffect } from "react";
import { useNavigate } from "react-router";
import { SelectChangeEvent } from "@mui/material";
import { GridPaginationModel, GridRowParams } from "@mui/x-data-grid";
import { useDebouncedCallback } from "use-debounce";
import { useLazyGetMoviesQuery } from "../../api/appApi";
import { getMoviesTableColumns } from "./movies-table.columns";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useHandleChange } from "../../hooks/useHandleChange";
import { MovieSearchTextField } from "../movie-search-text-field/movie-search-text-field";
import { CustomDropdown } from "../custom-dropdown/custom-dropdown";
import { getYears } from "../../utils/getYears";
import * as S from "./movies-table.styled";

const types = ["movie", "series", "episode"];

export const MoviesTable: React.FC = () => {
  const years = getYears();
  const columns = getMoviesTableColumns();
  const navigate = useNavigate();

  const [input, setInput] = useLocalStorage("input", "Pokemon");
  const [page, setPage] = useLocalStorage("page", 0);
  const [selectedYear, setSelectedYear] = useLocalStorage(
    "selectedYear",
    "All"
  );
  const [selectedType, setSelectedType] = useLocalStorage(
    "selectedType",
    "All"
  );

  const [getMoviesQuery, { data, isFetching, error }] = useLazyGetMoviesQuery();

  const getMovies = () =>
    getMoviesQuery({
      input: input,
      page: page + 1,
      year: selectedYear === "All" ? "" : selectedYear,
      type: selectedType === "All" ? "" : selectedType,
    });

  const debouncedGetMovies = useDebouncedCallback(
    () => {
      getMovies();
    },
    500,
    { maxWait: 2000 }
  );

  useEffect(() => {
    debouncedGetMovies();
  }, [input, page, selectedYear, selectedType]);

  const handlePaginationModelChange = ({ page }: GridPaginationModel) => {
    setPage(page);
  };

  const clearSearch = () => setInput("");

  const handleSearch = useHandleChange<string>(setInput);

  const handleYearChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedYear(event.target.value as string);
  };

  const handleTypeChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedType(event.target.value as string);
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

        <CustomDropdown
          handleChange={handleYearChange}
          selectedYear={selectedYear}
          list={years}
          label="Select year"
        />

        <CustomDropdown
          handleChange={handleTypeChange}
          selectedYear={selectedType}
          list={types}
          label="Select type"
        />
      </S.StyledBox>

      <S.StyledDataGrid
        rows={data?.Search || []}
        columns={columns}
        rowCount={parseInt(data?.totalResults || "0")}
        paginationMode="server"
        pageSizeOptions={[10]}
        paginationModel={{ page: page, pageSize: 10 }}
        onPaginationModelChange={handlePaginationModelChange}
        loading={isFetching}
        onRowClick={handleRowClick}
        getRowId={(row) => row.imdbID}
      />
    </>
  );
};
