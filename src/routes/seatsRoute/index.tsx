import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { SeatRequest } from "../../domain/butacaRequest";
import { SeatProvaider } from "../../provider/SeatProvaider";
import FormSeat from "../../components/Forms/formSeat";
import SeatsList from "../../components/ListComtainers/seatsList";

const SeatsContainer: FC = () => {
  const seatStateForm: SeatRequest = {
    id: "",
    number: "",
    row: "",
    room: {
      id: "",
      name: "",
      number: "",
    },
  };

  const seatMethods = useForm({ defaultValues: seatStateForm });

  useEffect(() => {
    document.title = 'Prueba Intuito | Sillas'
  }, [])

  return (
    <SeatProvaider>
      <FormProvider {...seatMethods}>
        <div className="flex flex-col items-center m-1 gap-2">
          <FormSeat />
          <SeatsList />
        </div>
      </FormProvider>
    </SeatProvaider>
  );
};

export default SeatsContainer;
