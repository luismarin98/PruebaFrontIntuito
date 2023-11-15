import { useState } from "react";
import { RoomRequest, SeatRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useSeat = () => {
  const [seatsList, setSeatsList] = useState<SeatRequest[] | undefined>([]);
  const [seat, setSeat] = useState<SeatRequest | undefined>();
  const [number, setNumber] = useState<string>("");

  const query = `http://localhost:3000/seat/`;
  const queryRoom = `http://localhost:3000/room/`;

  const runEditSeat = async () => {
    const response = await axios.put(`${query}?number=${number}`, { ...seat });
    if (response.statusText === 'OK') { alert('Silla editada con exito') }
    else { alert('Algo paso intente nuevamente') }
  };

  const runSaveSeat = async (numberRoom: string) => {
    const getRoom = await axios.get<RoomRequest[]>(`${queryRoom}?number=${numberRoom}`);
    setSeat((prev) => ({ ...prev!, room: getRoom.data[0] }));
    return await axios.post(query, { ...seat }).then((res) => {
      if (res.statusText === 'OK') return alert('Los datos del asiento se guardaron correctamente');
    })
  };

  const runFilterSeats = async () => {
    const response = await axios.get<SeatRequest[]>(`${query}${number !== "" ? `?number=${number}` : ""}`);
    const datoAjustado = response.data.map((prev) => ({ ...prev!, room: prev.room }));
    if (response.statusText === 'OK') { setSeatsList(datoAjustado) }
    else { alert('Algo paso, intente nuevamente') }
    number ? setNumber('') : null
  };

  const runDeleteSeat = async () => {
    const response = await axios.delete(`${query}${seat?.id}`);
    if (response.statusText === 'OK') { alert('Silla eliminada del registro') }
    else { alert('Algo paso, intente nuevament') }
  };

  return {
    seatsList,
    setSeat,
    runEditSeat,
    runSaveSeat,
    runFilterSeats,
    runDeleteSeat,
    setNumber,
  };
};

export default useSeat;
