import { useContext, MouseEvent, ChangeEvent, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { BookingRequest } from "../../domain/butacaRequest";
import BookingContext, {
  IBookingContext,
} from "../../provider/BookingProvaider";

const SaveBookingForm = () => {
  function randomNumberBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  const {
    setBooking,
    setSeatNumber,
    setDocument,
    setIsCloseModal,
    runSaveBookking,
    setDateBillboard,
    runGetBillboard,
    billboardData,
  } = useContext(BookingContext) as IBookingContext;

  const { setValue, getValues, reset, register } =
    useFormContext<BookingRequest>();

  setValue("id", randomNumberBetween(0, 10000000).toString());

  const handle_DocChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDocument(event.target.value);
  };

  const handle_SeatChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSeatNumber(event.target.value);
  };

  const handle_save = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const valueParams = { ...getValues() };
    if (!valueParams.date)
      return alert(
        "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
      );
    setBooking(valueParams);
    setIsCloseModal(false);
    runSaveBookking();
    reset();
  };

  useEffect(() => {}, []);

  return (
    <form className="flex flex-col p-5 gap-2 items-center">
      <div className="flex flex-row flex-wrap gap-4">
        <label className="flex flex-col gap-2 ring-2 ring-white p-2 rounded-md">
          <p>Escoger fecha</p>
          <select className="text-center p-1 rounded-md">
            {billboardData?.map((data) => (
              <option key={data.id} value={data.date}>
                {data.date}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 ring-2 ring-white p-2 rounded-md">
          <p>Escoger Pelicula</p>
          <select className="text-center p-1 rounded-md">
            {billboardData?.map((data) =>
              data.movie!.map((movie) => (
                <option key={movie.id} value={movie.name}>
                  {movie.name}
                </option>
              ))
            )}
          </select>
        </label>
        <label className="flex flex-col gap-2 ring-2 ring-white p-2 rounded-md">
          <p>Documento del cliente</p>
          <input
            type="text"
            placeholder="Documento del cliente"
            onChange={handle_DocChange}
            className="p-1 bg-slate-300 rounded-md text-black text-center"
          />
        </label>
        <label className="flex flex-col gap-2 ring-2 ring-white p-2 rounded-md">
          <p>Silla</p>
          <input
            type="text"
            placeholder="Silla de la sala"
            onChange={handle_SeatChange}
            className="p-1 bg-slate-300 rounded-md text-black text-center"
          />
        </label>
      </div>
      <button
        className="p-1 bg-slate-100 rounded-lg text-black"
        onClick={handle_save}
      >
        Guardar reserva
      </button>
    </form>
  );
};

export default SaveBookingForm;
