import Header from "../components/Header";
import { Outlet } from "react-router-dom";

import "../styles/style.scss";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Root;
