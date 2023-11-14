import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { RoomRequest } from "../../domain/butacaRequest";
import Roomcontext, { IRoomContext } from "../../provider/RoomProvaider";

const SaveRoomForm = () => {
  function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  const { runSaveRoom, setRoom, setIsCloseModal } = useContext(
    Roomcontext
  ) as IRoomContext;
  const { register, setValue, getValues, reset } =
    useFormContext<RoomRequest>();

  setValue("id", randomNumberBetween(0, 10000000).toString());

  const handle_save = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (!valueParams.name || !valueParams.number)
      return alert(
        "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
      );

    setRoom(valueParams);
    setIsCloseModal(false);
    runSaveRoom();
    reset();
  };

  return (
    <form className="flex flex-col p-5 gap-2">
      <input
        type="text"
        placeholder="Nombre de la sala"
        className="p-1 bg-slate-300 rounded-md text-black text-center"
        {...register("name", {
          required: "Asegurate de ingresar el nombre de la sala",
        })}
      />
      <input
        type="text"
        placeholder="Nombre de la sala"
        className="p-1 bg-slate-300 rounded-md text-black text-center"
        {...register("number", {
          required: "Asegurate de ingresar el numero de la sala",
        })}
      />
      <button
        className="p-1 bg-slate-100 rounded-lg text-black"
        onClick={handle_save}
      >
        Guardar Sala
      </button>
    </form>
  );
};

export default SaveRoomForm;
