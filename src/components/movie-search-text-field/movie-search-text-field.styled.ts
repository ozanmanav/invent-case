import { styled, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import IconButton from "@mui/material/IconButton";

export const SearchTextFieldWrapper = styled(TextField)`
  width: 300px;
  margin-bottom: 20px;
`;

export const SearchIcon = styled(SearchOutlinedIcon)`
  margin-right: 4px;
`;

export const ClearIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "isVisible",
})<{ isVisible: boolean }>`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;
