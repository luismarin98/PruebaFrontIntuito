import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { SeatRequest } from "../../domain/butacaRequest";
import SeatContext, { ISeatContext } from "../../provider/SeatProvaider";

const SeatsList: FC = () => {
  const {
    seatsList,
    setIsCloseModal,
    setIsEditModal,
    runDeleteSeat,
    runFilterSeats,
    setSeat,
  } = useContext(SeatContext) as ISeatContext;
  const { setValue } = useFormContext<SeatRequest>();

  const handle_EditBTN = (
    event: MouseEvent<HTMLButtonElement>,
    data: SeatRequest
  ) => {
    event.preventDefault();

    setValue("id", data.id);
    setValue("number", data.number);
    setValue("row", data.row);

    setValue("room.id", data.room.id);
    setValue("room.name", data.room.name);
    setValue("room.number", data.room.number);

    setIsCloseModal(true);
    setIsEditModal(true);
  };

  const handle_delete = (
    event: MouseEvent<HTMLButtonElement>,
    data: SeatRequest
  ) => {
    event.preventDefault();
    setSeat(data);
    runDeleteSeat();
    runFilterSeats();
  };

  return seatsList!.length > 0 ? (
    <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
      <thead>
        <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <th>Numero de sala</th>
          <th>Columna</th>
          <th>Nombre de sala</th>
          <th>Numero de sala</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {seatsList?.map((data) => (
          <tr
            key={data.id}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            <th>{data.number}</th>
            <th>{data.row}</th>
            <th>{data.room.name}</th>
            <th>{data.room.number}</th>
            <th className="flex flex-row gap-2 p-1">
              <button
                onClick={(e) => handle_EditBTN(e, data)}
                className="shadow-md p-2 rounded-md bg-green-400 hover:bg-green-500 text-white dark:text-black"
              >
                Editar
              </button>
              <button
                onClick={(e) => handle_delete(e, data)}
                className="shadow-md p-2 rounded-md bg-red-400 hover:bg-red-500 text-white dark:text-black"
              >
                Borrar
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2 text-center">
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        No hay sillas registradas
      </h3>
    </div>
  );
};

export default SeatsList;
