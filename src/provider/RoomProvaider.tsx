import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { RoomRequest } from "../domain/butacaRequest";

export interface IRoomContext {
  //Parametros de la pelicula
  roomsList: RoomRequest[] | undefined;
  setRoomParam: Dispatch<SetStateAction<RoomRequest | undefined>>;
  setIdRoom: Dispatch<SetStateAction<string>>;

  //Parametros de acciones
  runFilterRooms: () => void;
  runSaveRoom: () => void;
  runEditRoom: () => void;
  runDeleteRoom: () => void;

  //Parametros de accion del modal
  isOpenModal: boolean;
  setIsCloseModal: Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: Dispatch<SetStateAction<boolean>>;
}

const Roomcontext = createContext({});

export const RoomProvaider = ({ children }: { children: ReactNode }) => {
  const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const storage: IRoomContext = {
    isOpenModal,
    setIsCloseModal,
    isEditModal,
    setIsEditModal,
  };

  return (
    <Roomcontext.Provider value={storage}>{children}</Roomcontext.Provider>
  );
};

export default Roomcontext;
