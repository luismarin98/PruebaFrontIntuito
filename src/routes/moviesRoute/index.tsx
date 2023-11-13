import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MovieRequest } from "../../domain/butacaRequest";
import { BillboardProvaider } from "../../provider/MoviesProvaider";
import FormMovie from "../../components/formMovie";
import MoviesList from "../../components/moviesList";

const MovieContainer: FC = () => {
  const movieStateform: MovieRequest = {
    id: "",
    name: "",
    genero: "",
    duracion: "",
    edadPermitida: "",
  };

  const movieMethods = useForm({ defaultValues: movieStateform });

  return (
    <BillboardProvaider>
      <FormProvider {...movieMethods}>
        <div className="flex flex-col items-center m-1">
          <FormMovie />
          <MoviesList />
        </div>
      </FormProvider>
    </BillboardProvaider>
  );
};

export default MovieContainer;
