import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { RoomRequest } from "../../domain/butacaRequest";
import Roomcontext, { IRoomContext } from "../../provider/RoomProvaider";

const EditRoomForm = () => {
  const { runEditRoom, setRoom, setIsCloseModal, setIsEditModal } =
    useContext(Roomcontext) as IRoomContext;
  const { register, getValues, reset } = useFormContext<RoomRequest>();

  const handle_edit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (!valueParams.name || !valueParams.number)
      return alert(
        "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
      );

    setRoom(valueParams);
    setIsCloseModal(false);
    setIsEditModal(false);
    runEditRoom();
    reset();
  };

  return (
    <form className="flex flex-col p-5 gap-2">
      <input
        type="text"
        placeholder="Nombre de la sala"
        className="p-1 bg-slate-300 rounded-md text-black text-center"
        {...register("name")}
      />
      <input
        type="text"
        placeholder="Nombre de la sala"
        className="p-1 bg-slate-300 rounded-md text-black text-center"
        {...register("number")}
      />
      <button
        className="p-1 bg-slate-100 rounded-lg text-black"
        onClick={handle_edit}
      >
        Editar Sala
      </button>
    </form>
  );
};

export default EditRoomForm;
