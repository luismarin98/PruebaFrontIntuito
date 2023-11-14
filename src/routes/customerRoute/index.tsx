import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { CustomerRequest } from "../../domain/butacaRequest";
import { CustomerProvaider } from "../../provider/CustomerProvaider";
import CustomersList from "../../components/customersList";
import FormCustomer from "../../components/formCustomer";

const CustomerContainer: FC = () => {
  const customerStateForm: CustomerRequest = {
    age: "",
    document: "",
    email: "",
    id: "",
    lastName: "",
    name: "",
    phone: "",
  };

  const customerMethods = useForm({ defaultValues: customerStateForm });

  return (
    <CustomerProvaider>
      <FormProvider {...customerMethods}>
        <div className="flex flex-col items-center m-1 gap-2">
          <FormCustomer />
          <CustomersList />
        </div>
      </FormProvider>
    </CustomerProvaider>
  );
};

export default CustomerContainer;