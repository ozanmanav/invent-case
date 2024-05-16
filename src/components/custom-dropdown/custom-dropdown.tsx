import { MenuItem, SelectChangeEvent, capitalize } from "@mui/material";
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
      <S.StyledInputLabel>{label}</S.StyledInputLabel>

      <S.StyledSelect
        value={selectedYear}
        onChange={handleChange}
        placeholder="Select year"
        label={label}
      >
        <MenuItem key="All" value="All">
          All
        </MenuItem>

        {list.map((item) => (
          <MenuItem key={item} value={item}>
            {typeof item === "number" ? item : capitalize(item)}
          </MenuItem>
        ))}
      </S.StyledSelect>
    </S.StyledBox>
  );
};
