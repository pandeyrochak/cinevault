import React from "react";
import { Main } from "./exports";

interface HeaderProps {
  backdrop: string;
}

const Header = (props: HeaderProps) => {
  const { backdrop } = props;
  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: ` linear-gradient(180deg,        rgba(255, 255, 255, 0) 0.52%, rgba(66, 54, 54, 0.47) 54.69%, rgba(0, 0, 0, 0.72) 100%),url(${backdrop})`,
      }}
    >
      <Main />
    </div>
  );
};

export default Header;
