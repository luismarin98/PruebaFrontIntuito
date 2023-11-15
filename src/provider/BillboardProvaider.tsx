import {
    createContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import { useBillboard } from "../hooks";
import { BillboardRequest } from "../domain/butacaRequest";

export interface IBillboardContext {
    //Parametros de accion del modal
    isOpenModal: boolean;
    setIsCloseModal: Dispatch<SetStateAction<boolean>>;

    isEditModal: boolean;
    setIsEditModal: Dispatch<SetStateAction<boolean>>;

    setDateBillboard: Dispatch<SetStateAction<string>>;
    setNameMovie: Dispatch<SetStateAction<string>>;
    setRoomNumber: Dispatch<SetStateAction<string>>;

    billboardList: BillboardRequest[];

    runDeleteBillboard: () => Promise<void>;
    runEditBillboard: () => Promise<void>;
    runGetBillboardList: () => Promise<void>;
    runSaveBillboard: () => Promise<void>;
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
        setNameMovie,
        setRoomNumber
    } = useBillboard();

    const storage: IBillboardContext = {
        isOpenModal,
        setIsCloseModal,
        isEditModal,
        setIsEditModal,
        setDateBillboard,
        setNameMovie,
        setRoomNumber,
        billboardList,
        runDeleteBillboard,
        runEditBillboard,
        runGetBillboardList,
        runSaveBillboard,
    }

    return (
        <BillboardContext.Provider value={storage}>{children}</BillboardContext.Provider>
    )
}

export default BillboardContext;