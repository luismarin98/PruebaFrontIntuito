import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { SeatRequest } from "../domain/butacaRequest";
import useSeat from "../hooks/useSeat";

export interface ISeatContext {
  //Parametros de la pelicula
  seatsList: SeatRequest[] | undefined;
  setNumber: Dispatch<SetStateAction<string>>;
  setSeat: Dispatch<SetStateAction<SeatRequest | undefined>>;
  //setRoomNumber: (param: string) => Promise<void>;

  //Parametros de acciones
  runFilterSeats: () => Promise<void>;
  runSaveSeat: (param: string) => Promise<void>;
  runEditSeat: () => Promise<void>;
  runDeleteSeat: () => Promise<void>;

  //Parametros de accion del modal
  isOpenModal: boolean;
  setIsCloseModal: Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: Dispatch<SetStateAction<boolean>>;
}

const SeatContext = createContext({});

export const SeatProvaider = ({ children }: { children: ReactNode }) => {
  const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const {
    runDeleteSeat,
    runEditSeat,
    runFilterSeats,
    runSaveSeat,
    seatsList,
    setNumber,
    setSeat,
  } = useSeat();

  const storage: ISeatContext = {
    isOpenModal,
    setIsCloseModal,
    isEditModal,
    setIsEditModal,
    runDeleteSeat,
    runEditSeat,
    runFilterSeats,
    runSaveSeat,
    seatsList,
    setNumber,
    setSeat,
  };

  return (
    <SeatContext.Provider value={storage}>{children}</SeatContext.Provider>
  );
};

export default SeatContext;
