import { FC, useContext, MouseEvent } from "react";
import MovieContext, { IMovieContext } from "../../provider/MoviesProvaider";
import { MovieRequest } from "../../domain/butacaRequest";
import { useFormContext } from "react-hook-form";

const MoviesList: FC = () => {
  const {
    moviesList,
    setIsCloseModal,
    setIsEditModal,
    runDeleteMovie,
    setMovieParam,
  } = useContext(MovieContext) as IMovieContext;

  const { setValue } = useFormContext<MovieRequest>();

  const handle_EditBTN = (
    event: MouseEvent<HTMLButtonElement>,
    data: MovieRequest
  ) => {
    event.preventDefault();

    setValue("name", data.name);
    setValue("edadPermitida", data.edadPermitida);
    setValue("duracion", data.duracion);
    setValue("genero", data.genero);

    setIsCloseModal(true);
    setIsEditModal(true);
  };

  const handle_delete = (
    event: MouseEvent<HTMLButtonElement>,
    data: MovieRequest
  ) => {
    event.preventDefault();
    setMovieParam(data);
    runDeleteMovie();
  };

  return moviesList!.length > 0 ? (
    <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
      <thead>
        <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <th>Nombre</th>
          <th>Genero</th>
          <th>Edad</th>
          <th>Duracion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {moviesList?.map((data) => (
          <tr
            key={data.id}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            <th>{data.name}</th>
            <th>{data.genero}</th>
            <th>{data.edadPermitida}</th>
            <th>{data.duracion}</th>
            <th className="flex flex-row gap-2 p-1">
              <button
                onClick={(e) => handle_EditBTN(e, data)}
                className="shadow-md p-2 rounded-md bg-green-400 hover:bg-green-500 text-white dark:text-black"
              >
                Editar
              </button>
              <button
                onClick={(e) => handle_delete(e, data)}
                className="shadow-md p-2 rounded-md bg-red-400 hover:bg-red-500 text-white dark:text-black"
              >
                Borrar
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2 text-center">
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        No hay peliculas registradas
      </h3>
    </div>
  );
};

export default MoviesList;
