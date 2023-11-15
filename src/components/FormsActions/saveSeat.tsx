import { useContext, MouseEvent, useState, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { SeatRequest } from "../../domain/butacaRequest";
import SeatContext, { ISeatContext } from "../../provider/SeatProvaider";

const SaveSeat = () => {
  function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  const { runSaveSeat, setSeat, setIsCloseModal } = useContext(SeatContext) as ISeatContext;

  const { register, setValue, getValues, reset } =
    useFormContext<SeatRequest>();

  const [roomNumber, setRoomNumber] = useState<string>('');

  setValue("id", randomNumberBetween(0, 10000000).toString());

  const handle_change = (event: ChangeEvent<HTMLInputElement>) => {
    setRoomNumber(event.target.value);
  }

  const handle_save = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (!valueParams) return alert("Asegurate de rellenar todos los campos correspondientes");
    setSeat(valueParams);
    runSaveSeat(roomNumber);
    setIsCloseModal(false);
    reset();
  };

  return (
    <form className="flex flex-col p-2 gap-2">
      <input
        type="text"
        placeholder="Numero de silla"
        className="p-1 bg-slate-200 rounded-md text-black text-center"
        {...register("number", {
          required: "Asegurate de ingresar el numero de la silla",
        })}
      />
      <input
        type="text"
        placeholder="Columna de la silla"
        className="p-1 bg-slate-200 rounded-md text-black text-center"
        {...register("row", {
          required: "Asegurate de ingresar el nombre de la sala",
        })}
      />
      <input
        type="text"
        placeholder="Buscar numero de sala"
        className="p-1 bg-slate-200 rounded-md text-black text-center"
        onChange={handle_change}
      />
      <button
        className="p-1 bg-slate-100 rounded-lg text-black"
        onClick={handle_save}
      >
        Guardar Silla
      </button>
    </form>
  );
};

export default SaveSeat;
