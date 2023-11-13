import { FC, useContext } from "react";
import MovieContext, { IMovieContext } from "../provider/MoviesProvaider";

const MoviesList: FC = () => {
  const { moviesList } = useContext(MovieContext) as IMovieContext;
  return (
    <div>
      <table className="flex flex-col w-full">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Genero</th>
            <th>Edad</th>
            <th>Duracion</th>
          </tr>
        </thead>
        <tbody>
          {moviesList?.map((data) => (
            <tr key={data.id}>
              <th>{data.name}</th>
              <th>{data.genero}</th>
              <th>{data.edadPermitida}</th>
              <th>{data.duracion}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
