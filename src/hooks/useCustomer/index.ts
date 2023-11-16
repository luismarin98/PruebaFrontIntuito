import { useState } from "react";
import { CustomerRequest } from "../../domain/butacaRequest";
import axios from "axios";

const useCustomer = () => {
  const [customerList, setCustomerList] = useState<
    CustomerRequest[] | undefined
  >([]);
  const [customer, setCustomer] = useState<CustomerRequest>();
  const [documento, setDocumento] = useState<string>("");

  const query = `http://localhost:3000/customer/`;

  const runEditCustomer = async () => {
    await axios
      .put(`${query}${customer?.id}`, { ...customer })
      .then((res) => {
        if (res.status === 201) return alert("cliente editado con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runSaveCustomer = async () => {
    await axios
      .post(query, { ...customer })
      .then((res) => {
        if (res.status === 201) return alert("Cliente guardado con exito");
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runFilterCustomers = async () => {
    await axios
      .get(`${query}${documento !== "" ? `?document=${documento}` : ""}`)
      .then((res) => {
        if (!res.data) return null;
        if (res.status === 304)
          return alert("Puede que no hayan datos en la base de datos!");
        setCustomerList(res.data);
        documento ? setDocumento("") : null;
      })
      .catch(() => {
        alert("Algo paso, intenta nuevamente");
      });
  };

  const runDeleteCustomer = async () => {
    await axios
      .delete(`${query}${customer?.id}`)
      .then((res) => {
        if (res.status === 200) return alert("Cliente eliminado con exito");
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
    setDocumento,
  };
};

export default useCustomer;
