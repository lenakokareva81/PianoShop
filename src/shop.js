import { Route, Routes } from "react-router-dom";
import {
  Autorization,
  Registration,
  Users,
  Product,
  Delivery,
} from "./pages/index";
import styled from "styled-components";
import { Header, Footer, Modal } from "./components";
import { useDispatch } from "react-redux";
import { useLayoutEffect } from "react";
import { setUser } from "./actions";

// json-server --watch src/db.json --port 3005

const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: space-between;
  min-height: 100%;
  background-color: #ffff;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 200px 0;
  width: 1170px;
  margin: 0 auto;
`;

export const Shop = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem("userData");
    const currentUserData = JSON.parse(currentUserDataJSON);
    if (!currentUserData) {
      return;
    }
    dispatch(
      setUser({ ...currentUserData, role_id: Number(currentUserData.roleId) })
    );
  }, [dispatch]);

  return (
    <AppColumn>
      <Header />

      <Content>
        <Routes>
          <Route path="/" element={<div>главная страница</div>} />
          <Route path="/products" element={<div>каталог</div>} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/stock" element={<div>Акции</div>} />
          <Route path="/about_as" element={<div>О нас</div>} />
          <Route path="/contacts" element={<div>Контакты</div>} />

          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/:id/edit" element={<Product />} />
          <Route path="/login" element={<Autorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
      <Modal />
    </AppColumn>
  );
};
