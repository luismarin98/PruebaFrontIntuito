import { useContext, ChangeEvent, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import MovieContext, { IMovieContext } from "../../provider/MoviesProvaider";
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

const SaveMovieForm = () => {
  function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  const { setMovieParam, runSaveMovie, setIsCloseModal, setGeneroParam, generoParam } = useContext(
    MovieContext
  ) as IMovieContext;
  const { register, setValue, getValues, reset } =
    useFormContext<MovieRequest>();

  setValue("id", randomNumberBetween(0, 10000000).toString());

  const handle_SelectChangeEvent = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue("genero", event.target.value);
    setGeneroParam(event.target.value);
  };

  const handle_save = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (
      !valueParams.name ||
      !valueParams.duracion ||
      !valueParams.edadPermitida ||
      !valueParams.genero
    )
      return alert(
        "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
      );
    setMovieParam(valueParams);
    setIsCloseModal(false);
    runSaveMovie();
    reset();
  };

  return (
    <form className="flex flex-col p-5 gap-2">
      <input
        type="text"
        placeholder="Nombre Pelicula"
        {...register("name", { required: "Asegurate de ingresar un nombre" })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="text"
        placeholder="Edad Permitida"
        {...register("edadPermitida", {
          required: "Asegurate de ingresar un nombre",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="text"
        placeholder="Duracion"
        {...register("duracion", {
          required: "Asegurate de ingresar una duracion",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <label className="flex flex-row gap-2 items-center">
        <p>Genero:</p>
        <select
          className="text-black text-center rounded-lg p-1"
          value={generoParam}
          onChange={handle_SelectChangeEvent}
        >
          {generos.map((data) => (
            <option key={data.name} value={data.value}>
              {data.name}
            </option>
          ))}
        </select>
      </label>
      <button onClick={handle_save}>Guardar Pelicula</button>
    </form>
  );
};

export default SaveMovieForm;
