import { Grid, Typography } from "@mui/material";
import { MoviesTable } from "../components/movies-table/movies-table";

export const Movies: React.FC = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Typography
          textAlign={"center"}
          color={"primary"}
          fontWeight={600}
          variant="h5"
        >
          Intense PoC
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <MoviesTable />
      </Grid>
    </Grid>
  );
};
