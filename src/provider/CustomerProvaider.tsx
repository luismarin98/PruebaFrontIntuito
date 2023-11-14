import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { CustomerRequest } from "../domain/butacaRequest";
import useCustomer from "../hooks/useCustomer";

export interface ICustomerContext {
  //Parametros de la pelicula
  customerList: CustomerRequest[] | undefined;
  setCustomer: Dispatch<SetStateAction<CustomerRequest | undefined>>;

  //Parametros de acciones
  runFilterCustomers: () => void;
  runSaveCustomer: () => void;
  runEditCustomer: () => void;
  runDeleteCustomer: () => void;

  //Parametros de accion del modal
  isOpenModal: boolean;
  setIsCloseModal: Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: Dispatch<SetStateAction<boolean>>;
}

const CustomerContext = createContext({});

export const CustomerProvaider = ({ children }: { children: ReactNode }) => {
  const {
    customerList,
    runDeleteCustomer,
    runEditCustomer,
    runFilterCustomers,
    runSaveCustomer,
    setCustomer,
  } = useCustomer();

  const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const storage: ICustomerContext = {
    customerList,
    isEditModal,
    isOpenModal,
    runDeleteCustomer,
    runEditCustomer,
    runFilterCustomers,
    runSaveCustomer,
    setCustomer,
    setIsCloseModal,
    setIsEditModal,
  };

  return (
    <CustomerContext.Provider value={storage}>{children}</CustomerContext.Provider>
  );
};

export default CustomerContext;
