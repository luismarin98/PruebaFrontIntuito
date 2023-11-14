import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { RoomRequest } from "../../domain/butacaRequest";
import { RoomProvaider } from "../../provider/RoomProvaider";
import FormRoom from "../../components/Forms/formRoom";
import RoomsList from "../../components/ListComtainers/roomsList";

const RoomContainer: FC = () => {
  const movieStateform: RoomRequest = {
    id: "",
    name: "",
    number: "",
  };

  const movieMethods = useForm({ defaultValues: movieStateform });

  useEffect(() => {
    document.title = 'Prueba Intuito | Salas'
  }, [])

  return (
    <RoomProvaider>
      <FormProvider {...movieMethods}>
        <div className="flex flex-col items-center m-1 gap-2">
          <FormRoom />
          <RoomsList />
        </div>
      </FormProvider>
    </RoomProvaider>
  );
};

export default RoomContainer;
