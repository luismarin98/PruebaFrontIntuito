import { useState } from "react";
import { RoomRequest, SeatRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useCustomer = () => {
  const [seatsList, setSeatsList] = useState<SeatRequest[] | undefined>([]);
  const [seat, setSeat] = useState<SeatRequest | undefined>();
  const [number, setNumber] = useState<string>("");
  const [numberRoom, setNumberRoom] = useState<string | undefined>();

  const query = `http://localhost:3000/seat/`;
  const queryRoom = `http://localhost:3000/room/`;

  //Obtengo los datos de la sala
  const getRoom = async (numberR: string): Promise<RoomRequest> => {
    const response = await axios.get<RoomRequest>(`${queryRoom}${numberR}`);
    return response.data;
  };

  const runEditSeat = async () => {
    const fetchRoom = async () => {
      const roomData = await getRoom(numberRoom!);

      setSeat({
        room: roomData,
        id: seat!.id,
        number: seat!.number,
        row: seat!.row,
      });
    };

    fetchRoom();

    await axios
      .put(`${query}?number=${number}`, { ...seat })
      .then((res) => {
        if (res.status === 201) return alert("Silla editada");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runSaveSeat = async () => {
    await axios
      .post(query, { ...seat })
      .then((res) => {
        if (res.status === 201) return alert("Silla guardada");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runFilterSeats = async () => {
    await axios
      .get(`${query}${number !== "" ? `?number=${number}` : ""}`)
      .then((res) => {
        if (!res.data) return null;
        if (res.status === 304)
          return alert("Puede que no hayan datos en la base de datos!");
        setSeatsList(res.data);
        number ? setNumber("") : null;
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runDeleteSeat = async () => {
    await axios
      .delete(`${query}${number}`)
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
    getRoom,
    setNumberRoom
  };
};

export default useCustomer;
