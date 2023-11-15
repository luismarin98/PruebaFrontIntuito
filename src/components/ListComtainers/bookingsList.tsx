import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import { BookingRequest } from "../../domain/butacaRequest";
import BookingContext, {
  IBookingContext,
} from "../../provider/BookingProvaider";

const BookingList: FC = () => {
  const {
    bookingList,
    setIsCloseModal,
    setIsEditModal,
    setBooking,
    runDeleteBooking,
    runGetBookingList,
  } = useContext(BookingContext) as IBookingContext;

  const { setValue } = useFormContext<BookingRequest>();

  const handle_EditBTN = (
    event: MouseEvent<HTMLButtonElement>,
    data: BookingRequest
  ) => {
    event.preventDefault();

    setValue("billboard", data.billboard);
    setValue("customer", data.customer);
    setValue("seat", data.seat);
    setValue("date", data.date);
    setValue("id", data.id);

    setIsCloseModal(true);
    setIsEditModal(true);
  };

  const handle_delete = (
    event: MouseEvent<HTMLButtonElement>,
    data: BookingRequest
  ) => {
    event.preventDefault();
    //setDocumento(data.id);
    setBooking(data);
    runDeleteBooking();
    runGetBookingList();
  };

  return bookingList!.length > 0 ? (
    <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
      <thead>
        <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          <th>Cartelera</th>
          <th>Cliente</th>
          <th>Asiento</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {bookingList?.map((data) => (
          <tr
            key={data.id}
            className="text-slate-500 dark:text-slate-400 mt-2 text-sm"
          >
            <th>
              {/* {data.billboard!.map((bill) => (
                <div key={bill.id}>
                  <p>Fecha: {bill.date}</p>
                  <p>Inicia: {bill.endTime}</p>
                  <p>Finaliza: {bill.starttime}</p>
                  <p>
                    {bill.room!.map((room) => (
                      <div key={room.id}>
                        <p>Numero de sala: {room.number}</p>
                        <p>Nombre de la sala: {room.name}</p>
                      </div>
                    ))}
                  </p>
                  <p>
                    {bill.movie!.map((movie) => (
                      <div key={movie.id}>
                        <p>Pelicula: {movie.name}</p>
                        <p>Duracion: {movie.duracion}</p>
                        <p>Edad permitida: {movie.edadPermitida}</p>
                        <p>Genero: {movie.genero}</p>
                      </div>
                    ))}
                  </p>
                </div>
              ))} */}
            </th>
            <th>
              {/* {data.customer!.map((customer) => (
                <div key={customer.id}>
                  <p>Nombre: {customer.name}</p>
                  <p>Documento: {customer.document}</p>
                  <p>Email: {customer.email}</p>
                  <p>Telefono: {customer.phone}</p>
                  <p>Edad: {customer.age}</p>
                </div>
              ))} */}
            </th>
            <th>
              {/* {data.seat!.map((seat) => (
                <div key={seat.id}>
                  <p>{seat.number}</p>
                  <p>{seat.row}</p>
                  <p>
                    {seat.room!.map((room) => (
                      <p key={room.id}>
                        Sala: {room.name} | Numero: {room.number}
                      </p>
                    ))}
                  </p>
                </div>
              ))} */}
            </th>
            <th>{data.date}</th>
            <th className="flex flex-row gap-2 p-1">
              <button
                onClick={(e) => handle_EditBTN(e, data)}
                className="shadow-md p-2 rounded-md bg-green-400 hover:bg-green-500 text-white dark:text-black"
              >
                Editar
              </button>
              <button
                onClick={(e) => handle_delete(e, data)}
                className="shadow-md p-2 rounded-md bg-red-400 hover:bg-red-500 text-white dark:text-black"
              >
                Borrar
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <div className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2 text-center">
      <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
        No hay reservas registradas
      </h3>
    </div>
  );
};

export default BookingList;
