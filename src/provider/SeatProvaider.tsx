import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { RoomRequest, SeatRequest } from "../domain/butacaRequest";
import useSeat from "../hooks/useSeat";

export interface ISeatContext {
  //Parametros de la pelicula
  seatsList: SeatRequest[] | undefined;
  setNumber: Dispatch<SetStateAction<string>>;
  setNumberRoom: Dispatch<SetStateAction<string | undefined>>;
  setSeat: Dispatch<SetStateAction<SeatRequest | undefined>>;

  //Parametros de acciones
  runFilterSeats: () => void;
  runSaveSeat: () => void;
  runEditSeat: () => void;
  runDeleteSeat: () => Promise<void>;
  getRoom: (param: string) => Promise<RoomRequest>;

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
    getRoom,
    runDeleteSeat,
    runEditSeat,
    runFilterSeats,
    runSaveSeat,
    seatsList,
    setNumber,
    setNumberRoom,
    setSeat,
  } = useSeat();

  const storage: ISeatContext = {
    isOpenModal,
    setIsCloseModal,
    isEditModal,
    setIsEditModal,
    getRoom,
    runDeleteSeat,
    runEditSeat,
    runFilterSeats,
    runSaveSeat,
    seatsList,
    setNumber,
    setNumberRoom,
    setSeat,
  };

  return (
    <SeatContext.Provider value={storage}>{children}</SeatContext.Provider>
  );
};

export default SeatContext;
