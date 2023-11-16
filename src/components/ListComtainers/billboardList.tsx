import { FC, useContext, MouseEvent } from "react";
import { useFormContext } from "react-hook-form";
import BillboardContext, { IBillboardContext } from "../../provider/BillboardProvaider";
import { BillboardRequest } from "../../domain/butacaRequest";

const BillboardList: FC = () => {
    const { billboardList, setBillboard, runDeleteBillboard, setIsEditModal, setIsCloseModal } = useContext(BillboardContext) as IBillboardContext;
    const { setValue } = useFormContext<BillboardRequest>();

    const handle_delete = (event: MouseEvent<HTMLButtonElement>, data: BillboardRequest) => {
        event.preventDefault();
        setBillboard(data);
        runDeleteBillboard();
    }

    const handle_EditBTN = (event: MouseEvent<HTMLButtonElement>, data: BillboardRequest) => {
        event.preventDefault();

        setValue('date', data.date);
        setValue('starttime', data.starttime);
        setValue('endTime', data.endTime);
        setValue('id', data.id);
        setValue('room', data.room);
        setValue('movie', data.movie);

        setIsEditModal(true);
        setIsCloseModal(true);

    }

    return billboardList!.length > 0 ? (
        <table className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2">
            <thead>
                <tr className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    <th>Fecha</th>
                    <th>Hora Inicio</th>
                    <th>Hora Fin</th>
                    <th>Pelicula</th>
                    <th>Sala</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    billboardList!.map((data) => <tr key={data.id} className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                        <th>{data.date}</th>
                        <th>{data.starttime}</th>
                        <th>{data.endTime}</th>
                        <th>{data.movie.name}</th>
                        <th>{data.room.number}</th>
                        <th className="flex flex-row gap-2 p-1 items-center justify-center">
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
                    </tr>)
                }
            </tbody>
        </table>
    ) : (
        <div className="bg-white dark:bg-slate-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl table-fixed sm:w-1/2 sm:p-2 md:w-3/4 md:p-2 lg:w-5/6 lg:p-2 xl:w-full xl:p-2 text-center">
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                No hay reservas registradas
            </h3 >
        </div >
    )
}

export default BillboardList;