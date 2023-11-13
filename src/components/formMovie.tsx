import { useContext, MouseEvent } from "react";
import MovieContext, { IMovieContext } from "../provider/MoviesProvaider";
import MovieForm from "./forms/movieForm";
import DialogComponent from "./modalComponent";

const FormMovie = () => {
  const { isOpenModal, setIsCloseModal, runFilterMovies } = useContext(
    MovieContext
  ) as IMovieContext;

  const handle_OpenCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCloseModal(!isOpenModal);
  };

  const handle_ShowMovies = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    runFilterMovies();
  };

  return (
    <div className="flex flex-row gap-2">
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2" onClick={handle_OpenCloseModal}>Nueva Pelicula</button>
      <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2" onClick={handle_ShowMovies}>Mostrar Peliculas</button>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title="Pelicula"
      >
        <MovieForm />
      </DialogComponent>
    </div>
  );
};

export default FormMovie;
