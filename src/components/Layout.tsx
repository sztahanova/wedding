import { Outlet } from "react-router";
import { Header } from "./header/Header";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
