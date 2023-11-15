import {
    createContext,
    ReactNode,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import { useBooking } from "../hooks";
import { BookingRequest } from "../domain/butacaRequest";

export interface IBookingContext {
    //Parametros de accion del modal
    isOpenModal: boolean;
    setIsCloseModal: Dispatch<SetStateAction<boolean>>;

    isEditModal: boolean;
    setIsEditModal: Dispatch<SetStateAction<boolean>>;

    bookingList: BookingRequest[] | undefined;

    setBooking: Dispatch<SetStateAction<BookingRequest | undefined>>;
    setDateBillboard: Dispatch<SetStateAction<string>>;
    setDateBook: Dispatch<SetStateAction<string>>;
    setDocument: Dispatch<SetStateAction<string>>;
    setSeatNumber: Dispatch<SetStateAction<string>>;

    runDeleteBooking: () => Promise<void>;
    runEditBooking: () => Promise<void>;
    runGetBookingList: () => Promise<void>;
    runSaveBookking: () => Promise<void>;
}

const BookingContext = createContext({});

export const BookingProvaider = ({ children }: { children: ReactNode }) => {

    const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
    const [isEditModal, setIsEditModal] = useState<boolean>(false);

    const {
        bookingList,
        runDeleteBooking,
        runEditBooking,
        runGetBookingList,
        runSaveBookking,
        setBooking,
        setDateBillboard,
        setDateBook,
        setDocument,
        setSeatNumber
    } = useBooking();

    const storage: IBookingContext = {
        isOpenModal,
        setIsCloseModal,
        isEditModal,
        setIsEditModal,
        setBooking,
        setDateBillboard,
        setDateBook,
        setDocument,
        setSeatNumber,
        bookingList,
        runDeleteBooking,
        runEditBooking,
        runGetBookingList,
        runSaveBookking,
    }

    return (
        <BookingContext.Provider value={storage}>{children}</BookingContext.Provider>
    );
}

export default BookingContext;