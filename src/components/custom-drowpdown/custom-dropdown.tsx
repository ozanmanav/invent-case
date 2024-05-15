import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import * as S from "./custom-dropdown.styled";

interface Props {
  selectedYear: string;
  handleChange: (event: SelectChangeEvent<unknown>) => void;
  list: string[] | number[];
  label: string;
}

export const CustomDropdown: React.FC<Props> = ({
  handleChange,
  selectedYear,
  list,
  label,
}) => {
  return (
    <S.StyledBox>
      <InputLabel sx={{ marginLeft: "20px" }} id="demo-simple-select-label">
        {label}
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

        {list.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </S.StyledSelect>
    </S.StyledBox>
  );
};
