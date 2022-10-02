import classNames from "classnames";
import React, { FC, PropsWithChildren } from "react";

interface SideNavProps extends PropsWithChildren {
  isOpen: boolean;
  setOpenNav?: (isOpen: boolean) => void;
}

const SideNav: FC<SideNavProps> = ({ isOpen, setOpenNav, children }) => {
  return (
    <div
      className={classNames(
        "z-50 h-screen shadow-lg bg-white  w-64 max-w-full overflow-y-auto absolute inset-y-0 left-0 transform  transition duration-200 ease-in-out",
        { "-translate-x-full": !isOpen }
      )}
      onClick={() => (setOpenNav ? setOpenNav(false) : null)}
    >
      {children}
    </div>
  );
};

export default SideNav;
