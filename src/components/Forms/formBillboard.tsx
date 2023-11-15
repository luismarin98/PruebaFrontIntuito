import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { BillboardRequest } from "../../domain/butacaRequest";
import DialogComponent from "../ModalComponent/modalComponent";
import BillboardContext, {
  IBillboardContext,
} from "../../provider/BillboardProvaider";
import moment from "moment";

const FormBillboard = () => {
  const {
    isOpenModal,
    setIsCloseModal,
    setIsEditModal,
    isEditModal,
    runGetBillboardList,
    setDateBillboard,
  } = useContext(BillboardContext) as IBillboardContext;

  const { reset, register, getValues } = useFormContext<BillboardRequest>();

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
      setDateBillboard(moment(valueParam?.date).format("DD/MM/YYYY"));
    runGetBillboardList();
    reset();
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_OpenCloseModal}
        >
          Nueva cartelera
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_ShowCustomers}
        >
          Mostrar carteleras
        </button>
        <input
          className="p-1 bg-slate-300 rounded-md text-black text-center"
          type="date"
          {...register("date")}
          placeholder="Filtrar por fechas"
        />
      </form>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title={isEditModal ? "Editar cartelera" : "Guardar cartelera"}
      >
        Hola carteleras
      </DialogComponent>
    </>
  );
};

export default FormBillboard;
