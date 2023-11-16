import { useContext, MouseEvent, ChangeEvent } from "react";
import MovieContext, { IMovieContext } from "../../provider/MoviesProvaider";
import SaveMovieForm from "../FormsActions/movie/saveMovieForm";
import DialogComponent from "../ModalComponent/modalComponent";
import EditMovieForm from "../FormsActions/movie/editMovieForm";
import { useFormContext } from "react-hook-form";
import { MovieRequest } from "../../domain/butacaRequest";

const generos = [
  {
    value: "accion",
    name: "ACTION",
  },
  {
    value: "aventura",
    name: "ADVENTURE",
  },
  {
    value: "comedia",
    name: "COMEDY",
  },
  {
    value: "drama",
    name: "DRAMA",
  },
  {
    value: "horror",
    name: "HORROR",
  },
  {
    value: "musical",
    name: "MUSICALS",
  },
  {
    value: "misterio",
    name: "MYSTERY",
  },
  {
    value: "romance",
    name: "ROMANCE",
  },
  {
    value: "ciencia_ficcion",
    name: "SCIENCE_FICTION",
  },
  {
    value: "deortes",
    name: "SPORTS",
  },
  {
    value: "suspenso",
    name: "THRILLER",
  },
  {
    value: "occidenta;",
    name: "WESTERN",
  },
];

const FormMovie = () => {
  const {
    isOpenModal,
    setIsCloseModal,
    runFilterMovies,
    isEditModal,
    setIsEditModal,
    generoParam,
    setGeneroParam,
  } = useContext(MovieContext) as IMovieContext;

  const { reset } = useFormContext<MovieRequest>();

  const handle_OpenCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCloseModal(!isOpenModal);
    isEditModal ? setIsEditModal(false) : null;
    reset();
  };

  const handle_ShowMovies = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    runFilterMovies();
  };

  const handle_changeGeneros = (event: ChangeEvent<HTMLSelectElement>) => {
    setGeneroParam(event.target.value);
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_OpenCloseModal}
        >
          Nueva Pelicula
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_ShowMovies}
        >
          Mostrar Peliculas
        </button>
        <select value={generoParam} onChange={handle_changeGeneros} className="rounded-lg text-center text-black">
          {generos.map((data) => (
            <option key={data.name} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
      </form>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title={isEditModal ? "Editar Pelicula" : "Guardar Pelicula"}
      >
        {isEditModal ? <EditMovieForm /> : <SaveMovieForm />}
      </DialogComponent>
    </>
  );
};

export default FormMovie;
