import { useState } from "react";
import { BillboardRequest, MovieRequest, RoomRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useBillboard = () => {
    const [billboardList, setBillboardList] = useState<BillboardRequest[]>([]);
    const [billboard, setBillboard] = useState<BillboardRequest>();
    const [movie, setMovie] = useState<MovieRequest[]>([]);
    const [room, setRoom] = useState<RoomRequest[]>([]);

    const [dateBillboard, setDateBillboard] = useState<string>('');

    const query = `http://localhost:3000/billboard/`;

    const runEditBillboard = async () => {
        const response = await axios.put(`${query}${billboard?.id}`, { ...billboard });
        if (response.status === 201) { alert('Reserva editada con exito') }
        else { alert('Algo paso intente nuevamente') }
    }

    const runSaveBillboard = async () => {
        const response = await axios.post(query, { ...billboard });
        if (response.status === 201) { alert('Reserva guardada con exito') }
        else { alert('Algo paso, intente nuevamente') }
    }

    const runGetBillboardList = async () => {
        const response = await axios.get<BillboardRequest[]>(query);
        if (response.status === 200) { setBillboardList(response.data) }
        else { alert('Algo paso, intente nuevamente') }
        dateBillboard ? setDateBillboard('') : null;
    }

    const runDeleteBillboard = async () => {
        const response = await axios.delete(`${query}${billboard?.id}`);
        if (response.status === 200) { alert('Reserva eliminada del registro') }
        else { alert('Algo paso, intente nuevament') }
    }

    const getMovie = async () => {
        const response = await axios.get<MovieRequest[]>(`http://localhost:3000/movie/`);
        if (response.status === 404) { alert('No se encontro esta pelicula') }
        else { setMovie(response.data) }
    }

    const getRoom = async () => {
        const response = await axios.get<RoomRequest[]>(`http://localhost:3000/room/`);
        if (response.status === 404) { alert('No se encontro esta pelicula') }
        else { setRoom(response.data) }
    }

    return {
        runDeleteBillboard,
        runEditBillboard,
        runGetBillboardList,
        runSaveBillboard,
        setDateBillboard,
        billboardList,
        setBillboard,
        movie,
        room,
        getMovie,
        getRoom,
    }
}

export default useBillboard;