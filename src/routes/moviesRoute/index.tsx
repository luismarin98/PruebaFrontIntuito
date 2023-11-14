import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { MovieRequest } from "../../domain/butacaRequest";
import { MovieProvaider } from "../../provider/MoviesProvaider";
import FormMovie from "../../components/Forms/formMovie";
import MoviesList from "../../components/ListComtainers/moviesList";

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
    <MovieProvaider>
      <FormProvider {...movieMethods}>
        <div className="flex flex-col items-center m-1 gap-2">
          <FormMovie />
          <MoviesList />
        </div>
      </FormProvider>
    </MovieProvaider>
  );
};

export default MovieContainer;
