import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { RoomRequest } from "../domain/butacaRequest";
import { useRoom } from "../hooks";

export interface IRoomContext {
  //Parametros de la pelicula
  roomList: RoomRequest[] | undefined;
  setRoom: Dispatch<SetStateAction<RoomRequest | undefined>>;
  setNumber: Dispatch<SetStateAction<string>>;

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

  const {
    roomList,
    runDeleteRoom,
    runEditRoom,
    runFilterRooms,
    runSaveRoom,
    setNumber,
    setRoom,
  } = useRoom();

  const storage: IRoomContext = {
    isOpenModal,
    setIsCloseModal,
    isEditModal,
    setIsEditModal,
    roomList,
    runDeleteRoom,
    runEditRoom,
    runFilterRooms,
    runSaveRoom,
    setNumber,
    setRoom,
  };

  return (
    <Roomcontext.Provider value={storage}>{children}</Roomcontext.Provider>
  );
};

export default Roomcontext;
