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
    await axios
      .put(`${query}?number=${number}`, { ...seat })
      .then((res) => {
        if (res.status === 201) return alert("Silla editada");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runSaveSeat = async (numberRoom: string) => {
    const getRoom = await axios.get<RoomRequest[]>(`${queryRoom}?number${numberRoom}`)
    setSeat((prev) => ({ ...prev!, room: getRoom.data }));
    await axios.post(query, { ...seat }).then((res) => {
      if (res.statusText === 'OK') return alert('Los datos del asiento se guardaron correctamente');
    })
  };

  const runFilterSeats = async () => {
    const response = await axios.get<SeatRequest[]>(`${query}${number !== "" ? `?number=${number}` : ""}`);
    const datoAjustado = response.data.map((prev) => ({ ...prev!, room: prev.room }));
    if (response.statusText === 'OK') setSeatsList(datoAjustado);
    /*     await axios
          .get<SeatRequest[]>(`${query}${number !== "" ? `?number=${number}` : ""}`)
          .then((res) => {
            const response = res.data.map((seat) => ({ ...seat!, room: seat.room[0] }));
            if (res.statusText === 'OK') { setSeatsList(response); }
            else { alert('Algo paso en la obtencion de los datos') }
            console.log(response)
            number ? setNumber("") : null;
          })
          .catch(() => {
            alert("Algo paso, intenta nuevamente");
          }); */
  };

  const runDeleteSeat = async () => {
    await axios
      .delete(`${query}${seat?.id}`)
      .then((res) => {
        if (res.status === 200) return alert("Silla eliminada con exito");
      })
      .catch(() => {
        alert("Algo paso, intente nuevamente");
      });
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
