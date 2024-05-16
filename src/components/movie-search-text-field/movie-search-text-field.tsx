import { FC } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import * as S from "./movie-search-text-field.styled";

interface Props {
  input: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFetching: boolean;
  clearSearch: () => void;
}

export const MovieSearchTextField: FC<Props> = ({
  input,
  handleSearch,
  isFetching,
  clearSearch,
}) => {
  return (
    <S.SearchTextFieldWrapper
      placeholder="Enter movie name"
      value={input}
      onChange={handleSearch}
      variant="outlined"
      label="Search"
      InputProps={{
        startAdornment: <S.SearchIcon fontSize="small" />,
        endAdornment: (
          <S.ClearIconButton
            title="Clear"
            aria-label="Clear"
            size="small"
            isVisible={!!input && !isFetching}
            onClick={clearSearch}
          >
            <ClearIcon fontSize="small" />
          </S.ClearIconButton>
        ),
      }}
    />
  );
};
