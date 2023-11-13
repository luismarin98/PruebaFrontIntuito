import { useState } from "react";
import { MovieRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useMovie = () => {
  const [moviesList, setMoviesList] = useState<MovieRequest[] | undefined>([]);
  const [movieParam, setMovieParam] = useState<MovieRequest | undefined>();

  const querySave = `http://localhost:3000/movie`;
  const queryFilter = `http://localhost:3000/movie`;

  const runSaveMovie = async () => {
    await axios
      .post(querySave, { ...movieParam })
      .then((res) => {
        if (res.status === 200) return alert("Pelicula guardado con exito");
      })
      .catch((err) => {
        if (err.response) return alert("Algo paso, intenta nuevamente");
      });
  };

  const runFilterMovies = async () => {
    await axios
      .get(queryFilter)
      .then((res) => {
        if (!res.data) return null;
        setMoviesList(res.data);
      })
      .catch((err) => {
        if (err.response) return alert("Algo paso, intenta nuevamente");
      });
  };

  return {
    runSaveMovie,
    runFilterMovies,
    setMovieParam,
    moviesList,
  };
};

export default useMovie;
