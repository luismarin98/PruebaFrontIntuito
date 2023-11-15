import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { BookingRequest } from "../../domain/butacaRequest";
import DialogComponent from "../ModalComponent/modalComponent";
import BookingContext, {
  IBookingContext,
} from "../../provider/BookingProvaider";
import moment from "moment";
import SaveBookingForm from "../FormsActions/saveBooking";

const FormBooking = () => {
  const {
    isOpenModal,
    setIsCloseModal,
    setIsEditModal,
    isEditModal,
    runGetBookingList,
    setDateBook,
  } = useContext(BookingContext) as IBookingContext;
  const { reset, register, getValues } = useFormContext<BookingRequest>();

  const handle_OpenCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCloseModal(!isOpenModal);
    isEditModal ? setIsEditModal(false) : null;
    reset();
  };

  const handle_ShowCustomers = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParam = { ...getValues() };
    if (valueParam?.date !== "")
      setDateBook(moment(valueParam?.date).format("DD/MM/YYYY"));
    runGetBookingList();
    reset();
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_OpenCloseModal}
        >
          Nueva reserva
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_ShowCustomers}
        >
          Mostrar reservas
        </button>
        <input
          className="p-1 bg-slate-300 rounded-md text-black text-center"
          type="date"
          {...register("date")}
          placeholder="fecha"
        />
      </form>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title={isEditModal ? "Editar reserva" : "Guardar reserva"}
      >
        <SaveBookingForm />
        {/* {isEditModal ? <EditCustomerForm /> : <SaveCustomerform />} */}
      </DialogComponent>
    </>
  );
};

export default FormBooking;
