import { useState } from "react";
import { RoomRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useRoom = () => {
  const [roomList, setRoomList] = useState<RoomRequest[] | undefined>([]);
  const [room, setRoom] = useState<RoomRequest | undefined>();
  const [number, setNumber] = useState<string>("");

  const query = `http://localhost:3000/room/`;

  const runEditRoom = async () => {
    await axios
      .put(`${query}${number}`, { ...room })
      .then((res) => {
        if (res.status === 201) return alert("Pelicula editada con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runSaveRoom = async () => {
    await axios
      .post(query, { ...room })
      .then((res) => {
        if (res.status === 201) return alert("Pelicula guardado con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runFilterRooms = async () => {
    await axios
      .get(`${query}${number ? `?number=${number}` : ""}`)
      .then((res) => {
        if (!res.data) return null;
        if (res.status === 304)
          return alert("Puede que no hayan datos en la base de datos!");
        setRoomList(res.data);
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runDeleteRoom = async () => {
    await axios
      .delete(query)
      .then((res) => {
        if (res.status === 200) return alert("Pelicula eliminada con exito");
      })
      .catch(() => {
        alert("Algo paso, intente nuevamente");
      });
  };

  return {
    roomList,
    setRoom,
    setNumber,
    runEditRoom,
    runSaveRoom,
    runFilterRooms,
    runDeleteRoom,
  };
};

export default useRoom;
