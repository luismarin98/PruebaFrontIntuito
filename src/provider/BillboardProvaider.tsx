import {
    createContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import { useBillboard } from "../hooks";
import { BillboardRequest, MovieRequest, RoomRequest } from "../domain/butacaRequest";

export interface IBillboardContext {
    //Parametros de accion del modal
    isOpenModal: boolean;
    setIsCloseModal: Dispatch<SetStateAction<boolean>>;

    isEditModal: boolean;
    setIsEditModal: Dispatch<SetStateAction<boolean>>;

    setDateBillboard: Dispatch<SetStateAction<string>>;
    setBillboard: Dispatch<SetStateAction<BillboardRequest | undefined>>;

    billboardList: BillboardRequest[];
    room: RoomRequest[] | undefined;
    movie: MovieRequest[] | undefined

    runDeleteBillboard: () => Promise<void>;
    runEditBillboard: () => Promise<void>;
    runGetBillboardList: () => Promise<void>;
    runSaveBillboard: () => Promise<void>;

    getRoom: () => Promise<void>;
    getMovie: () => Promise<void>;
}

const BillboardContext = createContext({});

export const BillboardProvaider = ({ children }: { children: ReactNode }) => {
    const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
    const [isEditModal, setIsEditModal] = useState<boolean>(false);

    const {
        billboardList,
        runDeleteBillboard,
        runEditBillboard,
        runGetBillboardList,
        runSaveBillboard,
        setDateBillboard,
        setBillboard,
        getMovie,
        getRoom,
        movie,
        room
    } = useBillboard();

    const storage: IBillboardContext = {
        isOpenModal,
        setIsCloseModal,
        isEditModal,
        setIsEditModal,
        setDateBillboard,
        billboardList,
        runDeleteBillboard,
        runEditBillboard,
        runGetBillboardList,
        runSaveBillboard,
        setBillboard,
        getMovie,
        getRoom,
        movie,
        room
    }

    return (
        <BillboardContext.Provider value={storage}>{children}</BillboardContext.Provider>
    )
}

export default BillboardContext;