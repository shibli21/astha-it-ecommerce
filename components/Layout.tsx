import { FC, PropsWithChildren } from "react";
import Navbar from "./Navbar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
