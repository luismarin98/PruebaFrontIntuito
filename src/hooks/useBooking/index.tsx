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
  const [dateBook, setDateBook] = useState<string>("");

  const [billboardData, setBillboardData] = useState<BillboardRequest[]>();

  const [document, setDocument] = useState<string>("");
  const [seatNumber, setSeatNumber] = useState<string>("");
  const [dateBillBoard, setDateBillboard] = useState<string>("");

  const query = `http://localhost:3000/booking/${
    dateBook ? `?date=${dateBook}` : ""
  }`;
  const customerQuery = `http://localhost:3000/customer/?document=${
    document ? document : ""
  }`;
  const seatQuery = `http://localhost:3000/seat/?number=${
    seatNumber ? seatNumber : ""
  }`;
  const billboardQuery = `http://localhost:3000/billboard/?date=${
    dateBillBoard ? dateBillBoard : ""
  }`;

  const runEditBooking = async () => {
    const response = await axios.put(query, { ...booking });
    if (response.statusText === "OK") {
      alert("Reserva editada con exito");
    } else {
      alert("Algo paso intente nuevamente");
    }
  };

  const runSaveBookking = async () => {
    const responseCustomer = await axios.get<CustomerRequest[]>(customerQuery);
    const responseSeat = await axios.get<SeatRequest[]>(seatQuery);
    const responseBillboard = await axios.get<BillboardRequest[]>(
      billboardQuery
    );

    setBooking((prev) => ({
      ...prev!,
      customer: responseCustomer.data,
      seat: responseSeat.data,
      billboard: responseBillboard.data,
    }));

    const response = await axios.post(query, { ...booking });
    if (response.statusText === "OK") {
      alert("Reserva guardada con exito");
    } else {
      alert("Algo paso, intente nuevamente");
    }
  };

  const runGetBookingList = async () => {
    const response = await axios.get<BookingRequest[]>(query);
    const datosAjustados = response.data.map((prev) => ({
      ...prev!,
      customer: prev.customer,
      seat: prev.seat,
      billboard: prev.billboard,
    }));
    if (response.statusText === "OK") {
      setBookingList(datosAjustados);
    } else {
      alert("Algo paso, intente nuevamente");
    }
    dateBook ? setDateBook("") : null;
  };

  const runDeleteBooking = async () => {
    const response = await axios.delete(`${query}${booking?.id}`);
    if (response.statusText === "OK") {
      alert("Reserva eliminada del registro");
    } else {
      alert("Algo paso, intente nuevament");
    }
  };

  const runGetBillboard = async () => {
    const response = await axios.get(billboardQuery);
    if (response.statusText === "OK") setBillboardData(response.data);
    else {
      alert("Algo paso, intente nuevament");
    }
  };

  return {
    bookingList,
    billboardData,
    setBooking,
    setDateBook,
    setDocument,
    setSeatNumber,
    setDateBillboard,
    runSaveBookking,
    runGetBookingList,
    runGetBillboard,
    runDeleteBooking,
    runEditBooking,
  };
};

export default useBooking;
