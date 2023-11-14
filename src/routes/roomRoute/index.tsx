import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RoomRequest } from "../../domain/butacaRequest";
import { RoomProvaider } from "../../provider/RoomProvaider";

const MovieContainer: FC = () => {
  const movieStateform: RoomRequest = {
    id: "",
    name: "",
    number: "",
  };

  const movieMethods = useForm({ defaultValues: movieStateform });

  return (
    <RoomProvaider>
      <FormProvider {...movieMethods}>
        <div className="flex flex-col items-center m-1 gap-2">
          {/* <FormMovie />
          <MoviesList /> */}
        </div>
      </FormProvider>
    </RoomProvaider>
  );
};

export default MovieContainer;
