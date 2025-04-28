import styled from "styled-components";
import { Button } from "../button/button";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModalText,
  selectModalonCancel,
  selectModalonConfirm,
  selectModalIsOpen,
  selectModalIdProducts,
} from "../../selectors";
import { H4 } from "../h4/h4";
import { Input } from "../input/input";
import { Icon } from "../icon/icon";
import { selectModalType } from "../../selectors/select-modal-type";
import { Checkbox } from "../checkbox/checkbox";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useResetStore } from "../../hooks";
import { ErrorMessage } from "../errorMessage/errorMessage";
import { server } from "../../bff";

const authFormScheme = yup.object().shape({
  login: yup
    .string()
    .required("заполните ФИО")
    .matches(
      /^[а-яА-ЯёЁa-zA-Z0-9]+$/,
      "неверно заполнено, допускаются только буквы"
    )
    .min(3, "неверно заполнен ФИО, должно быть больше 3 символов")
    .max(15, "неверно заполнен ФИО, должно быть меньше 15 символов"),
  tel: yup
    .string()
    .required("заполните телефон")
    .matches(/^\w+$/, "неверно заполнен телефон, допускаются только  цыфры ")
    .min(3, "неверно заполнен пароль, должно быть больше 3 символов")
    .max(15, "неверно заполнен пароль, должно быть меньше 15 символов"),
  consollages: yup
    .boolean()
    .oneOf([true], "укажите согласие на обработку персональных данных"),
});

const ModalContainer = ({ className }) => {
  const text = useSelector(selectModalText);
  const isOpen = useSelector(selectModalIsOpen);
  const type = useSelector(selectModalType);
 
  const onConfirm = useSelector(selectModalonConfirm);
  const onCancel = useSelector(selectModalonCancel);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      tel: "",
      consollages: false,
    },
    resolver: yupResolver(authFormScheme),
  });
  const [serverError, setServerError] = useState(null);
  useResetStore(reset);
  const dispatch = useDispatch();
  const onSubmit = ({ login, tel }) => {
    server.createOrder(login, tel).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`);
        return;
      }
      onConfirm();
    });
  };

  const formError =
    errors?.login?.message ||
    errors?.tel?.message ||
    errors?.consollages?.message;

  const errorMessage = formError || serverError;

  if (!isOpen) {
    return null;
  }

  return (
    <div className={className}>
      <div className="overlay"></div>
      <div className="box">
        <div className="header">
          <H4 margin="0px">{text}</H4>
          <div onClick={onCancel}>
            <Icon
              id="fa-times"
              size="20px"
              margin="5px 0px 0px 0px"
              color="rgba(1, 1, 1, 0.2)"
              onClick={onCancel}
            />
          </div>
        </div>
        {type === "form" ? (
          <div className="form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                margin="30px 0 0 0"
                type="text"
                placeholder="ФИО"
                {...register("login", { onChange: () => setServerError(null) })}
              />
              <Input
                margin="30px 0 0 0"
                type="text"
                placeholder="телефон"
                {...register("tel", { onChange: () => setServerError(null) })}
              />
              <Checkbox
                label="Согласен на обработку данных"
                checked="consollages"
                margin="20px 0 0 0"
                {...register("consollages", {
                  onChange: () => setServerError(null),
                })}
              />

              <Button margin="20px 0 0 0" type="submit" disabled={!!formError}>
                Заказать
              </Button>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </form>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );

  // if (type === "information") {
  //   return (
  //     <div className={className}>
  //       <div className="overlay"></div>
  //       <div className="box">
  //         <div className="header">
  //           <H4 margin="0px">{text}</H4>
  //           <div onClick={onCancel}>
  //             <Icon
  //               id="fa-times"
  //               size="20px"
  //               margin="5px 0px 0px 0px"
  //               color="rgba(1, 1, 1, 0.2)"
  //               onClick={onCancel}
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
};

export const Modal = styled(ModalContainer)`
  z-index: 20;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  & .overlay {
    background-color: rgba(0, 0, 0, 70.9%);
    width: 100%;
    height: 100%;
    position: absolute;
  }
  & .box {
    text-align: center;
    width: 400px;
    z-index: 30;
    background-color: white;
    position: relative;
    margin: 0 auto;
    top: 50%;
    transform: translate(0, -50%);
    border: 1px solid #000;
    padding: 20px;
  }
  & .header {
    display: flex;
    justify-content: space-between;
  }
`;
