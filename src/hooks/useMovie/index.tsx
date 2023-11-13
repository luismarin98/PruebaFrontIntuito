import { useState } from "react";
import { MovieRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useMovie = () => {
  const [moviesList, setMoviesList] = useState<MovieRequest[] | undefined>([]);
  const [movieParam, setMovieParam] = useState<MovieRequest | undefined>();
  const [generoParam, setGeneroParam] = useState<string>("");

  const query = `http://localhost:3000/movie`;

  const runEditMovie = async () => {
    await axios
      .put(query + `/${movieParam?.id}`, { ...movieParam })
      .then((res) => {
        if (res.status === 201) return alert("Pelicula editada con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runSaveMovie = async () => {
    await axios
      .post(query, { ...movieParam })
      .then((res) => {
        if (res.status === 201) return alert("Pelicula guardado con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runFilterMovies = async () => {
    await axios
      .get(`query/${generoParam !== "" ? `?genero=${generoParam}` : ""}`)
      .then((res) => {
        if (!res.data) return null;
        if (res.status === 304)
          return alert("Puede que no hayan datos en la base de datos!");
        setMoviesList(res.data);
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runDeleteMovie = async () => {
    await axios
      .delete(query + `/${movieParam?.id}`)
      .then((res) => {
        if (res.status === 200) return alert("Pelicula eliminada con exito");
      })
      .catch(() => {
        alert("Algo paso, intente nuevamente");
      });
  };

  return {
    runSaveMovie,
    runFilterMovies,
    runDeleteMovie,
    setMovieParam,
    runEditMovie,
    setGeneroParam,
    generoParam,
    moviesList,
  };
};

export default useMovie;