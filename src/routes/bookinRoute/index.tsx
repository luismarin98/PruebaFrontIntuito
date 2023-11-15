import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BookingRequest } from "../../domain/butacaRequest";
import { BookingProvaider } from "../../provider/BookingProvaider";

const BookingContainer: FC = () => {
    const bookingStateForm: BookingRequest = {
        billboard: [],
        customer: [],
        date: '',
        id: '',
        seat: [],
    }

    const bookingMethods = useForm({ defaultValues: bookingStateForm });

    useEffect(() => {
        document.title = 'Prueba Intuito | Reservas';
    }, []);

    return (
        <BookingProvaider>
            <FormProvider {...bookingMethods}>
                <div className="flex flex-col items-center m-1 gap-2"></div>
            </FormProvider>
        </BookingProvaider>
    )
}

export default BookingContainer;