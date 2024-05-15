import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DirectorChairIcon from "../../assets/img/director-chair.png";
import ReleasedYearIcon from "../../assets/img/press-release.png";
import WriterIcon from "../../assets/img/writer.png";
import YearIcon from "../../assets/img/year.png";
import PlotIcon from "../../assets/img/plot.png";
import MovieImage from "../../assets/img/film.png";
import { useLazyGetMovieDetailByIdQuery } from "../../api/appApi";
import { LoadingScreen } from "../../components/loading-screen/loading-screen";
import * as S from "./MovieDetail.styled";
import { DetailCard } from "../../components/detail-card/detail-card";

export const MovieDetail: React.FC = () => {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const [getMoviesQueryById, { data, isFetching, error }] =
    useLazyGetMovieDetailByIdQuery();

  useEffect(() => {
    getMoviesQueryById({ id: movieId || "" });
  }, []);

  const handleBack = () => {
    navigate("/movies");
  };

  if (isFetching) {
    return <LoadingScreen />;
  }

  if (error) return <>Something went wrong.</>;

  return (
    <Grid container mt={2} padding={2}>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          width={"100%"}
          fontWeight={600}
          color="primary"
        >
          {data?.Title}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <S.StyledBoxRow>
          <S.StyledImageBox
            src={data?.Poster !== "N/A" ? data?.Poster : MovieImage}
          />

          <Grid container spacing={2} ml={2}>
            <Grid item xs={4}>
              <DetailCard
                title="IMDB score"
                text={data?.imdbRating}
                element={<StarOutlineIcon fontSize="medium" />}
              />
            </Grid>

            <Grid item xs={4}>
              <DetailCard
                title="Director"
                text={data?.Director}
                element={
                  <Avatar
                    sx={{ width: "20px", height: "20px" }}
                    src={DirectorChairIcon}
                  />
                }
              />
            </Grid>

            <Grid item xs={4}>
              <DetailCard
                title="Writer(s)"
                text={data?.Writer}
                element={
                  <Avatar
                    sx={{ width: "20px", height: "20px" }}
                    variant="square"
                    src={WriterIcon}
                  />
                }
              />
            </Grid>

            <Grid item xs={4}>
              <DetailCard
                title="Released"
                text={data?.Released}
                element={
                  <Avatar
                    sx={{ width: "20px", height: "20px" }}
                    variant="square"
                    src={ReleasedYearIcon}
                  />
                }
              />
            </Grid>

            <Grid item xs={4}>
              <DetailCard
                title="Year"
                text={data?.Year}
                element={
                  <Avatar
                    sx={{ width: "20px", height: "20px" }}
                    variant="square"
                    src={YearIcon}
                  />
                }
              />
            </Grid>

            <Grid item xs={4}>
              <DetailCard
                title="Plot"
                text={data?.Plot}
                element={
                  <Avatar
                    sx={{ width: "20px", height: "20px" }}
                    variant="square"
                    src={PlotIcon}
                  />
                }
              />
            </Grid>
          </Grid>
        </S.StyledBoxRow>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Button
          sx={{ textTransform: "none", fontSize: "18px" }}
          variant="outlined"
          size="large"
          onClick={handleBack}
        >
          <KeyboardBackspaceIcon sx={{ marginRight: "10px" }} />
          Back to Movies
        </Button>
      </Grid>
    </Grid>
  );
};
