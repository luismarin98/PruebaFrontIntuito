import { useState } from "react";
import { CustomerRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useCustomer = () => {
  const [customerList, setCustomerList] = useState<
    CustomerRequest[] | undefined
  >([]);
  const [customer, setCustomer] = useState<CustomerRequest | undefined>();

  const query = `http://localhost:3000/customer/${
    customer !== undefined ? customer?.id : ""
  }`;

  const runEditCustomer = async () => {
    await axios
      .put(query + `/${customer?.id}`, { ...customer })
      .then((res) => {
        if (res.status === 201) return alert("Pelicula editada con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runSaveCustomer = async () => {
    await axios
      .post(query, { ...customer })
      .then((res) => {
        if (res.status === 201) return alert("Pelicula guardado con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runFilterCustomers = async () => {
    await axios
      .get(query)
      .then((res) => {
        if (!res.data) return null;
        if (res.status === 304)
          return alert("Puede que no hayan datos en la base de datos!");
        setCustomerList(res.data);
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runDeleteCustomer = async () => {
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
    customerList,
    setCustomer,
    runEditCustomer,
    runSaveCustomer,
    runFilterCustomers,
    runDeleteCustomer,
  };
};

export default useCustomer;
