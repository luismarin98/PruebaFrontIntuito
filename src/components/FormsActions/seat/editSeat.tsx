import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { SeatRequest } from "../../../domain/butacaRequest";
import SeatContext, { ISeatContext } from "../../../provider/SeatProvaider";

const EditSeatForm = () => {
  const { setSeat, runEditSeat, setIsEditModal, setIsCloseModal } = useContext(
    SeatContext
  ) as ISeatContext;
  const { register, getValues, reset } = useFormContext<SeatRequest>();

  const handle_edit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (!valueParams?.number || !valueParams?.row)
      return alert(
        "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
      );
    setSeat(valueParams);
    runEditSeat();
    setIsEditModal(false);
    setIsCloseModal(false);
    reset();
  };

  return (
    <form className="flex flex-col p-2 gap-3">
      <label className="flex flex-col gap-2">
        <p>Numero de asiento</p>
        <input
          type="text"
          placeholder="Documento"
          {...register("number", {
            required: "Asegurate de ingresar el numero del asiento",
          })}
          className="p-1 bg-slate-300 rounded-md text-black text-center"
        />
      </label>
      <label className="flex flex-col gap-2">
        <p>Numero de columna</p>
        <input
          type="text"
          placeholder="Nombre Cliente"
          {...register("row", {
            required: "Asegurate de ingresar la fila del asiento",
          })}
          className="p-1 bg-slate-300 rounded-md text-black text-center"
        />
      </label>
      <button
        className="p-1 bg-slate-100 rounded-lg text-black"
        onClick={handle_edit}
      >
        Editar silla
      </button>
    </form>
  );
};

export default EditSeatForm;
