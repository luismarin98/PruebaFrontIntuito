import { useState } from "react";
import { BillboardRequest, MovieRequest, RoomRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useBillboard = () => {
    const [billboardList, setBillboardList] = useState<BillboardRequest[]>([]);
    const [billboard, setBillboard] = useState<BillboardRequest>();

    const [dateBillboard, setDateBillboard] = useState<string>('');
    const [nameMovie, setNameMovie] = useState<string>('');
    const [roomNumber, setRoomNumber] = useState<string>('');

    const query = `http://localhost:3000/billboard/?date=${dateBillboard ? dateBillboard : ''}`;
    const movieQuery = `http://localhost:3000/movie/${nameMovie ? `?name=${nameMovie}` : ''}`;
    const roomQuery = `http://localhost:3000/room/${roomNumber ? `?number=${roomNumber}` : ''}`;

    const runEditBillboard = async () => {
        const response = await axios.put(query, { ...billboard });
        if (response.statusText === 'OK') { alert('Reserva editada con exito') }
        else { alert('Algo paso intente nuevamente') }
    }

    const runSaveBillboard = async () => {
        const responseMovie = await axios.get<MovieRequest[]>(movieQuery);
        const responseRoom = await axios.get<RoomRequest[]>(roomQuery);

        setBillboard((prev) => ({ ...prev!, movie: responseMovie.data, room: responseRoom.data }));

        const response = await axios.post(query, { ...billboard });
        if (response.statusText === 'OK') { alert('Reserva guardada con exito') }
        else { alert('Algo paso, intente nuevamente') }
    }

    const runGetBillboardList = async () => {
        const response = await axios.get<BillboardRequest[]>(query);
        const datosAjustados = response.data.map((prev) => ({ ...prev!, movie: prev.movie, room: prev.room }));
        if (response.statusText === 'OK') { setBillboardList(datosAjustados) }
        else { alert('Algo paso, intente nuevamente') }
        dateBillboard ? setDateBillboard('') : null;
    }

    const runDeleteBillboard = async () => {
        const response = await axios.delete(query);
        if (response.statusText === 'OK') { alert('Reserva eliminada del registro') }
        else { alert('Algo paso, intente nuevament') }
    }

    return {
        runDeleteBillboard,
        runEditBillboard,
        runGetBillboardList,
        runSaveBillboard,
        setDateBillboard,
        setRoomNumber,
        setNameMovie,
        billboardList
    }
}

export default useBillboard;