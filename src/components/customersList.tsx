import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { CustomerRequest } from "../domain/butacaRequest";
import CustomerContext, {
  ICustomerContext,
} from "../provider/CustomerProvaider";

const CustomersList: FC = () => {
  const {
    customerList,
    setIsCloseModal,
    setIsEditModal,
    runDeleteCustomer,
    setCustomer,
  } = useContext(CustomerContext) as ICustomerContext;

  const { setValue } = useFormContext<CustomerRequest>();

  const handle_EditBTN = (
    event: MouseEvent<HTMLButtonElement>,
    data: CustomerRequest
  ) => {
    event.preventDefault();

    setValue("name", data.name);
    setValue("lastName", data.lastName);
    setValue("document", data.document);
    setValue("phone", data.phone);
    setValue("email", data.email);
    setValue("age", data.age);
    setValue("id", data.id);

    setIsCloseModal(true);
    setIsEditModal(true);
  };

  const handle_delete = (
    event: MouseEvent<HTMLButtonElement>,
    data: CustomerRequest
  ) => {
    event.preventDefault();
    setCustomer(data);
    runDeleteCustomer();
  };

  return customerList!.length > 0 ? (
    <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
      <thead>
        <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <th>Documento</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
          <th>Email</th>
          <th>Edad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {customerList?.map((data) => (
          <tr
            key={data.id}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            <th>{data.document}</th>
            <th>{data.name}</th>
            <th>{data.lastName}</th>
            <th>{data.phone}</th>
            <th>{data.email}</th>
            <th>{data.age}</th>
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
        No hay clientes registrados
      </h3>
    </div>
  );
};

export default CustomersList;
