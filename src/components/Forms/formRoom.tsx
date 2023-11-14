import { useFormContext } from "react-hook-form";
import { useContext, MouseEvent } from "react";
import Roomcontext, { IRoomContext } from "../../provider/RoomProvaider";
import DialogComponent from "../ModalComponent/modalComponent";
import { RoomRequest } from "../../domain/butacaRequest";
import SaveRoomForm from "../FormsActions/saveRoom";
import EditRoomForm from "../FormsActions/editRoom";

const FormRoom = () => {
  const {
    isOpenModal,
    setIsCloseModal,
    isEditModal,
    runFilterRooms,
    setNumber,
  } = useContext(Roomcontext) as IRoomContext;

  const { reset, register, getValues } = useFormContext<RoomRequest>();

  const handle_OpenCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCloseModal(!isOpenModal);
    reset();
  };

  const handle_ShowRooms = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParam = { ...getValues() };
    if (valueParam?.number) setNumber(valueParam?.number);
    runFilterRooms();
    reset();
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_OpenCloseModal}
        >
          Nueva Sala
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_ShowRooms}
        >
          Mostrar Salas
        </button>
        <input
          className="p-1 bg-slate-300 rounded-md text-black text-center"
          type="text"
          {...register("number")}
          placeholder="Numero de sala"
        />
      </form>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title={isEditModal ? "Editar Sala" : "Guardar Sala"}
      >
        {isEditModal ? <EditRoomForm /> : <SaveRoomForm />}
      </DialogComponent>
    </>
  );
};

export default FormRoom;
