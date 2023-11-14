import { FC, useContext, MouseEvent } from "react";
import { RoomRequest } from "../../domain/butacaRequest";
import Roomcontext, { IRoomContext } from "../../provider/RoomProvaider";
import { useFormContext } from "react-hook-form";

const RoomsList: FC = () => {
  const {
    roomList,
    setIsCloseModal,
    setIsEditModal,
    setRoom,
    setNumber,
    runDeleteRoom,
    runFilterRooms,
  } = useContext(Roomcontext) as IRoomContext;

  const { setValue } = useFormContext<RoomRequest>();

  const handle_EditBTN = (
    event: MouseEvent<HTMLButtonElement>,
    data: RoomRequest
  ) => {
    event.preventDefault();

    setValue("id", data.id);
    setValue("name", data.name);
    setValue("number", data.number);

    setIsCloseModal(true);
    setIsEditModal(true);
  };

  const handle_delete = (
    event: MouseEvent<HTMLButtonElement>,
    data: RoomRequest
  ) => {
    event.preventDefault();
    setNumber(data.id);
    setRoom(data);
    runDeleteRoom();
    runFilterRooms();
  };

  return roomList!.length > 0 ? (
    <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
      <thead>
        <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <th>Nombre</th>
          <th>Numero de sala</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {roomList?.map((data) => (
          <tr
            key={data.id}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            <th>{data.name}</th>
            <th>{data.number}</th>
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
        No hay salas registradas
      </h3>
    </div>
  );
};

export default RoomsList;
