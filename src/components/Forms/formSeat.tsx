import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { SeatRequest } from "../../domain/butacaRequest";
import DialogComponent from "../ModalComponent/modalComponent";
import SeatContext, { ISeatContext } from "../../provider/SeatProvaider";
import EditSeatForm from "../FormsActions/editSeat";
import SaveSeatForm from "../FormsActions/saveSeat";

const FormSeat = () => {
  const {
    isOpenModal,
    setIsCloseModal,
    runFilterSeats,
    setIsEditModal,
    isEditModal,
    setNumber,
  } = useContext(SeatContext) as ISeatContext;

  const { reset, register, getValues } = useFormContext<SeatRequest>();

  const handle_OpenCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCloseModal(!isOpenModal);
    isEditModal ? setIsEditModal(false) : null;
    reset();
  };

  const handle_ShowCustomers = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParam = { ...getValues() };
    if (valueParam?.number !== "") setNumber(valueParam?.number);
    runFilterSeats();
    reset();
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_OpenCloseModal}
        >
          Nueva silla
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_ShowCustomers}
        >
          Mostrar sillas
        </button>
        <input
          className="p-1 bg-slate-300 rounded-md text-black text-center"
          type="text"
          {...register("number")}
          placeholder="Numero de la silla"
        />
      </form>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title={isEditModal ? "Editar silla" : "Guardar silla"}
      >
        {isEditModal ? <EditSeatForm /> : <SaveSeatForm />}
      </DialogComponent>
    </>
  );
};

export default FormSeat;
