import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import useMovie from "../hooks/useMovie";
import { MovieRequest } from "../domain/butacaRequest";

export interface IMovieContext {
  moviesList: MovieRequest[] | undefined;
  setMovieParam: Dispatch<SetStateAction<MovieRequest | undefined>>;
  runFilterMovies: () => void;
  runSaveMovie: () => void;

  isOpenModal: boolean;
  setIsCloseModal: Dispatch<SetStateAction<boolean>>;
}

const MovieContext = createContext({});

export const BillboardProvaider = ({ children }: { children: ReactNode }) => {
  const { moviesList, setMovieParam, runFilterMovies, runSaveMovie } =
    useMovie();

  const [isOpenModal, setIsCloseModal] = useState<boolean>(false);

  const storage: IMovieContext = {
    moviesList,
    setMovieParam,
    runFilterMovies,
    runSaveMovie,
    isOpenModal,
    setIsCloseModal,
  };

  return (
    <MovieContext.Provider value={storage}>{children}</MovieContext.Provider>
  );
};

export default MovieContext;
