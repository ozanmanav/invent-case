import { Grid } from "@mui/material";
import { MoviesTable } from "../components/movies-table/movies-table";

export const Movies: React.FC = () => {
  return (
    <Grid container spacing={5} padding={2}>
      <Grid item xs={12}>
        <MoviesTable />
      </Grid>
    </Grid>
  );
};
