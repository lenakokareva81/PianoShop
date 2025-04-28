import { genedateDate } from "../utils";

export const addOrder = (login, tel, idProducts = []) =>
  fetch("http://localhost:3005/orders", {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({
      login,
      tel,
      idProducts,
      registed_at: genedateDate(),
    }),
  }).then((createdOrder) => createdOrder.json());
