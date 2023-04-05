import Header from "../components/Header";
import { Outlet } from "react-router-dom";

import "../styles/style.scss";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
