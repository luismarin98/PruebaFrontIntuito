import { useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import CustomerContext, {
  ICustomerContext,
} from "../../provider/CustomerProvaider";
import { CustomerRequest } from "../../domain/butacaRequest";

const SaveCustomerform = () => {
  function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  const { setCustomer, runSaveCustomer, setIsCloseModal } = useContext(
    CustomerContext
  ) as ICustomerContext;
  const { register, setValue, getValues, reset } =
    useFormContext<CustomerRequest>();

  setValue("id", randomNumberBetween(0, 10000000).toString());

  const handle_save = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (
      !valueParams.document ||
      !valueParams.name ||
      !valueParams.lastName ||
      !valueParams.phone ||
      !valueParams.email ||
      !valueParams.age
    )
      return alert(
        "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
      );
    setCustomer(valueParams);
    setIsCloseModal(false);
    runSaveCustomer();
    reset();
  };

  return (
    <form className="flex flex-col p-5 gap-2">
      <input
        type="text"
        placeholder="Documento"
        {...register("document", {
          required: "Asegurate de ingresar el documento",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="text"
        placeholder="Nombre Cliente"
        {...register("name", {
          required: "Asegurate de ingresar los nombres del cliente",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="text"
        placeholder="Apellido Cliente"
        {...register("lastName", {
          required: "Asegurate de ingresar los apellidos del cliente",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="tel"
        placeholder="Telefono"
        {...register("phone", {
          required: "Asegurate de ingresar el telefono",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: "Asegurate de ingresar el Email del cliente",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <input
        type="text"
        placeholder="Edad"
        {...register("age", {
          required: "Asegurate de ingresar la edad del cliente",
        })}
        className="p-1 bg-slate-300 rounded-md text-black text-center"
      />
      <button
        className="p-1 bg-slate-100 rounded-lg text-black"
        onClick={handle_save}
      >
        Guardar cliente
      </button>
    </form>
  );
};

export default SaveCustomerform;
