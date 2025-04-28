import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useResetStore } from "../../hooks";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { server } from "../../bff";
import { Link, Navigate } from "react-router-dom";
import { Input, Button, Checkbox, H4 } from "../../components";
import { setUser } from "../../actions/index";
import { selectUserRole } from "../../selectors";
import styled from "styled-components";
import { ROLE } from "../../constans";

const authFormScheme = yup.object().shape({
  login: yup
    .string()
    .required("заполните логин")
    .matches(
      /^\w+$/,
      "неверно заполнен логин, допускаются только буквы и цыфры"
    )
    .min(3, "неверно заполнен логин, должно быть больше 3 символов")
    .max(15, "неверно заполнен логин, должно быть меньше 15 символов"),
  password: yup
    .string()
    .required("заполните пароль")
    .matches(
      /^\w+$/,
      "неверно заполнен пароль, допускаются только буквы, цыфры "
    )
    .min(3, "неверно заполнен пароль, должно быть больше 3 символов")
    .max(15, "неверно заполнен пароль, должно быть меньше 15 символов"),
  passcheck: yup
    .string()
    .required("заполните повтор пароля")
    .oneOf([yup.ref("password"), null], "пароли не совпадают"),
  consollages: yup
    .boolean()
    .oneOf([true], "укажите согласие на обработку персональных данных"),
});

const StyledLink = styled(Link)`
  text-decoration: underline;
  text-align: center;
  margin: 10px;
  font-size: 18px;
`;

const ErrorMessage = styled.div`
  background-color: #fdbdbd;
  margin: 20px 0 0 0;
  padding: 5px;
  font-size: 18px;
  width: 100%;
`;

const RegistrationContainer = ({ className }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passcheck: "",
      consollages: false,
    },
    resolver: yupResolver(authFormScheme),
  });
  const [serverError, setServerError] = useState(null);

  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);

  useResetStore(reset);

  const onSubmit = ({ login, password }) => {
    server.register(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса ${error}`);
        return;
      }
      dispatch(setUser(res));
      sessionStorage.setItem("userData", JSON.stringify(res));
    });
  };

  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message ||
    errors?.consollages?.message;

  const errorMessage = formError || serverError;

  if (roleId !== ROLE.GUEST) {
    return <Navigate to="/" />;
  }
  return (
    <div className={className}>
      <H4>авторизация</H4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          margin="30px 0 0 0"
          type="text"
          placeholder="логин..."
          {...register("login", { onChange: () => setServerError(null) })}
        />

        <Input
          margin="20px 0 0 0"
          type="password"
          placeholder="пароль..."
          {...register("password", { onChange: () => setServerError(null) })}
        />
        <Input
          margin="20px 0 0 0"
          type="password"
          placeholder="пароль..."
          {...register("passcheck", { onChange: () => setServerError(null) })}
        />
        <Checkbox
          label="Согласен на обработку данных"
          checked="consollages"
          margin="20px 0 0 0"
          {...register("consollages", { onChange: () => setServerError(null) })}
        />

        <Button margin="20px 0 0 0" type="submit" disabled={!!formError}>
          зарегестрироваться
        </Button>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > form {
    display: flex;
    flex-direction: column;
    width: 260px;
  }
`;
