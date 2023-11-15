import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BillboardRequest } from "../../domain/butacaRequest";
import { BillboardProvaider } from "../../provider/BillboardProvaider";

const BillboardContainer: FC = () => {
    const bookingStateForm: BillboardRequest = {
        date: '',
        endTime: '',
        id: '',
        movie: [],
        room: [],
        starttime: '',
    }

    const bookingMethods = useForm({ defaultValues: bookingStateForm });

    useEffect(() => {
        document.title = 'Prueba Intuito | Reservas';
    }, []);

    return (
        <BillboardProvaider>
            <FormProvider {...bookingMethods}>
                <div className="flex flex-col items-center m-1 gap-2"></div>
            </FormProvider>
        </BillboardProvaider>
    )
}

export default BillboardContainer;