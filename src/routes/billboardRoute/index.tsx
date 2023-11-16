import { FC, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BillboardRequest } from "../../domain/butacaRequest";
import { BillboardProvaider } from "../../provider/BillboardProvaider";
import FormBillboard from "../../components/Forms/formBillboard";
import BillboardList from "../../components/ListComtainers/billboardList";

const BillboardContainer: FC = () => {
  const bookingStateForm: BillboardRequest = {
    date: "",
    endTime: "",
    id: "",
    movie: {
      id: '',
      duracion: '',
      edadPermitida: '',
      genero: '',
      name: ''
    },
    room: {
      id: '',
      name: '',
      number: ''
    },
    starttime: "",
  };

  const bookingMethods = useForm({ defaultValues: bookingStateForm });

  useEffect(() => {
    document.title = "Prueba Intuito | Reservas";
  }, []);

  return (
    <BillboardProvaider>
      <FormProvider {...bookingMethods}>
        <div className="flex flex-col items-center m-1 gap-2">
          <FormBillboard />
          <BillboardList />
        </div>
      </FormProvider>
    </BillboardProvaider>
  );
};

export default BillboardContainer;
