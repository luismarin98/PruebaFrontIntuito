import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { CustomerRequest } from "../domain/butacaRequest";
import DialogComponent from "./modalComponent";
import CustomerContext, {
  ICustomerContext,
} from "../provider/CustomerProvaider";
import EditCustomerForm from "./forms/editCustomer";
import SaveCustomerform from "./forms/saveCustomer";

const FormCustomer = () => {
  const {
    isOpenModal,
    setIsCloseModal,
    runFilterCustomers,
    setIsEditModal,
    isEditModal,
    setCustomer,
  } = useContext(CustomerContext) as ICustomerContext;

  const { reset, register, getValues } = useFormContext<CustomerRequest>();

  const handle_OpenCloseModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsCloseModal(!isOpenModal);
    isEditModal ? setIsEditModal(false) : null;
    reset();
  };

  const handle_ShowCustomers = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParam = { ...getValues() };
    setCustomer(valueParam);
    runFilterCustomers();
  };

  return (
    <>
      <form className="flex flex-row gap-2">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_OpenCloseModal}
        >
          Nuevo cliente
        </button>
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"
          onClick={handle_ShowCustomers}
        >
          Mostrar Clientes
        </button>
        <input
          className="p-1 bg-slate-300 rounded-md text-black text-center"
          type="text"
          {...register("document")}
          placeholder="Documento"
        />
      </form>
      <DialogComponent
        isOpen={isOpenModal}
        onClose={setIsCloseModal}
        title={isEditModal ? "Editar Cliente" : "Guardar Cliente"}
      >
        {isEditModal ? <EditCustomerForm /> : <SaveCustomerform />}
      </DialogComponent>
    </>
  );
};

export default FormCustomer;
