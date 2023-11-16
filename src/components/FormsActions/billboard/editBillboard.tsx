import { useContext, MouseEvent, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { BillboardRequest } from "../../../domain/butacaRequest";
import BillboardContext, { IBillboardContext } from "../../../provider/BillboardProvaider";
import moment from "moment";

const EditBillboard = () => {
    const { setBillboard, runEditBillboard, setIsEditModal, setIsCloseModal, room, movie } = useContext(BillboardContext) as IBillboardContext;
    const { setValue, getValues, reset } = useFormContext<BillboardRequest>()

    const handle_horaInicio = (event: ChangeEvent<HTMLInputElement>) => {
        setValue('starttime', event.target.value);
    };

    const handle_horaFin = (event: ChangeEvent<HTMLInputElement>) => {
        setValue('endTime', event.target.value);
    };

    const handle_change = (event: ChangeEvent<HTMLInputElement>) => {
        setValue('date', moment(event.target.value).format('DD/MM/YYYY'));
    };

    const handle_numberRoom = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue('room', room!.filter((r) => r.number === event.target.value)[0])
    }

    const handle_nameMovie = (event: ChangeEvent<HTMLSelectElement>) => {
        setValue('movie', movie!.filter((m) => m.name === event.target.value)[0])
    }

    const handle_edit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const valueParams = { ...getValues() };
        if (!valueParams) return alert(
            "Asegurese de no dejar ningun campo vacio, esto puede generar errores en la base de datos, gracias!"
        );

        setBillboard(valueParams);
        runEditBillboard();
        setIsCloseModal(false);
        setIsEditModal(false);
        reset();
    }

    return (
        <form className="flex flex-row flex-wrap gap-2">
            <label className="flex flex-col ring-1 ring-white rounded-md p-1 gap-2">
                <p>Seleccionar pelicula</p>
                <select onChange={handle_nameMovie} className="p-1 rounded-md text-center">
                    {movie?.map((data) => <option key={data.id} value={data.name}>{data.name}</option>)}
                </select>
            </label>
            <label className="flex flex-col ring-1 ring-white rounded-md p-1 gap-2">
                <p>Seleccionar sala</p>
                <select onChange={handle_numberRoom} className="p-1 rounded-md text-center">
                    {room?.map((data) => <option key={data.id} value={data.number}>{data.number}</option>)}
                </select>
            </label>
            <input type="time" onChange={handle_horaInicio} placeholder="Hora inicio" className="p-2 rounded-md text-center" />
            <input type="time" onChange={handle_horaFin} placeholder="Hora fin" className="p-2 rounded-md text-center" />
            <input type="date" onChange={handle_change} className="p-2 rounded-md text-center" />
            <button className="p-1 bg-slate-100 rounded-lg text-black" onClick={handle_edit}>Editar cartelera</button>
        </form>
    )
}

export default EditBillboard;