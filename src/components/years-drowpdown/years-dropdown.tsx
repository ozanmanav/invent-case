import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import * as S from "./years-dropdown.styled";

interface Props {
  selectedYear: string;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
}

export const YearsDropdown: React.FC<Props> = ({
  handleChange,
  selectedYear,
}) => {
  const currentYear = new Date().getFullYear();
  const earliestYear = 1970;
  const years = Array.from(
    { length: currentYear - earliestYear + 1 },
    (_, index) => currentYear - index
  );

  return (
    <S.StyledBox>
      <InputLabel sx={{ marginLeft: "20px" }} id="demo-simple-select-label">
        Select year
      </InputLabel>
      <S.StyledSelect
        value={selectedYear}
        onChange={handleChange}
        placeholder="Select year"
        labelId="demo-simple-select-label"
      >
        <MenuItem key={"Select No filter"} value={"Select No filter"}>
          {"Select No filter"}
        </MenuItem>
        {years.map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </S.StyledSelect>
    </S.StyledBox>
  );
};
