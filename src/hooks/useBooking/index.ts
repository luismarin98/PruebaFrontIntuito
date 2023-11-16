import { useState } from "react";
import {
  BillboardRequest,
  BookingRequest,
  CustomerRequest,
  SeatRequest,
} from "../../domain/butacaRequest";
import axios from "axios";

const useBooking = () => {
  const [bookingList, setBookingList] = useState<BookingRequest[] | undefined>(
    []
  );
  const [booking, setBooking] = useState<BookingRequest>();
  const [customer, setCustomer] = useState<CustomerRequest>();
  const [billboard, setBillboard] = useState<BillboardRequest>();
  const [seat, setSeat] = useState<SeatRequest>();

  const query = `http://localhost:3000/booking/`;
  const queryCustomer = `http://localhost:3000/customer/`;
  const querySeat = `http://localhost:3000/seat/`;
  const queryBillboard = `http://localhost:3000/billboard/`;

  const run_saveBook = async () => {
    const res_seat = await axios.get<SeatRequest>(`${querySeat}${seat?.id}`);
    const res_custom = await axios.get<CustomerRequest>(`${queryCustomer}${customer?.id}`);
    const res_bill = await axios.get<BillboardRequest>(`${queryBillboard}${billboard?.id}`);

    setBooking((prev) => ({ ...prev!, seat: res_seat.data, customer: res_custom.data, billboard: res_bill.data }))

    console.log(booking);
    /* const response = await axios.post(query, { ...booking });
    if (response.status === 200) { alert('Reserva Guardada con exito') }
    else { alert('Algo paso, intente nuevamente') } */
  }

  const run_editBook = async () => {
    const response = await axios.put(`${query}${booking?.id}`, { ...booking });
    if (response.status === 201) { alert('Reserva editada del registro') }
    else { alert('Algo paso, intente nuevamente') }
  }

  const run_deleteBook = async () => {
    const response = await axios.delete(`${query}${booking?.id}`);
    if (response.status === 201) { alert('Reserva eliminada del registro') }
    else { alert('Algo paso, intente nuevamente') }
  }

  const get_ListBookings = async () => {
    const response = await axios.get(query);
    if (response.status === 200) { setBookingList(response.data) }
    else { alert('Algo paso, intente nuevamente') }
  }

  return {
    bookingList,
    setBooking,
    run_deleteBook,
    run_editBook,
    run_saveBook,
    get_ListBookings,
    setCustomer,
    setBillboard,
    setSeat,
  }
};

export default useBooking;
