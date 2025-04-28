import { addOrder } from "../api";

export const createOrder = async (login, tel, idProducts) => {
  await addOrder(login, tel, idProducts);

  return {
    error: null,
    res: true,
  };
};
