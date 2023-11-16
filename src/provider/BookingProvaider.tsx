import {
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import { useBooking } from "../hooks";
import { BillboardRequest, BookingRequest, CustomerRequest, SeatRequest } from "../domain/butacaRequest";

export interface IBookingContext {
  //Parametros de accion del modal
  isOpenModal: boolean;
  setIsCloseModal: Dispatch<SetStateAction<boolean>>;

  isEditModal: boolean;
  setIsEditModal: Dispatch<SetStateAction<boolean>>;

  bookingList: BookingRequest[] | undefined;
  get_ListBookings: () => Promise<void>;

  run_deleteBook: () => Promise<void>;
  run_editBook: () => Promise<void>;
  run_saveBook: () => Promise<void>;

  setBillboard: Dispatch<SetStateAction<BillboardRequest | undefined>>;
  setBooking: Dispatch<SetStateAction<BookingRequest | undefined>>;
  setCustomer: Dispatch<SetStateAction<CustomerRequest | undefined>>;
  setSeat: Dispatch<SetStateAction<SeatRequest | undefined>>;
}

const BookingContext = createContext({});

export const BookingProvaider = ({ children }: { children: ReactNode }) => {
  const [isOpenModal, setIsCloseModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);

  const {
    bookingList,
    get_ListBookings,
    run_deleteBook,
    run_editBook,
    run_saveBook,
    setBillboard,
    setBooking,
    setCustomer,
    setSeat
  } = useBooking();

  const storage: IBookingContext = {
    bookingList,
    get_ListBookings,
    run_deleteBook,
    run_editBook,
    run_saveBook,
    setBillboard,
    setBooking,
    setCustomer,
    setSeat,
    isOpenModal,
    setIsCloseModal,
    isEditModal,
    setIsEditModal
  };

  return (
    <BookingContext.Provider value={storage}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingContext;
