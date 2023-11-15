import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { useMovie } from "../hooks";
import { MovieRequest } from "../domain/butacaRequest";

export interface IMovieContext {
  //Parametros de la pelicula
  moviesList: MovieRequest[] | undefined;
  setMovieParam: Dispatch<SetStateAction<MovieRequest | undefined>>;
  generoParam: string;
  setGeneroParam: Dispatch<SetStateAction<string>>;

  //Parametros de acciones
  runFilterMovies: () => void;
  runSaveMovie: () => void;
  runEditMovie: () => void;
  runDeleteMovie: () => void;

  //Parametros de accion del modal
  isOpenModal: boolean;
  setIsCloseModal: Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: Dispatch<SetStateAction<boolean>>;
}

const MovieContext = createContext({});

export const MovieProvaider = ({ children }: { children: ReactNode }) => {
  const {
    moviesList,
    setMovieParam,
    runFilterMovies,
    runSaveMovie,
    runDeleteMovie,
    runEditMovie,
    setGeneroParam,
    generoParam,
  } = useMovie();

  const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const storage: IMovieContext = {
    moviesList,
    setMovieParam,
    runFilterMovies,
    runSaveMovie,
    isOpenModal,
    setIsCloseModal,
    runEditMovie,
    runDeleteMovie,
    isEditModal,
    setIsEditModal,
    generoParam,
    setGeneroParam,
  };

  return (
    <MovieContext.Provider value={storage}>{children}</MovieContext.Provider>
  );
};

export default MovieContext;
