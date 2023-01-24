import React from "react";

interface PrimaryBtnProps {
  title: string;
  onClickHandler: Function;
  iconComponent?: React.ReactNode;
  classList?: string;
}
const PrimaryBtn = (props: PrimaryBtnProps) => {
  const { title, onClickHandler, iconComponent, classList } = props;
  return (
    <button
      className={`bg-primary-yellow text-secondary-brown text-sm sm:text-xl rounded-lg flex justify-center items-center gap-2 px-4 py-3 sm:px-5 sm:py-4 w-fit ${
        classList ? classList : ""
      }`}
      type="button"
      onClick={() => onClickHandler()}
    >
      {iconComponent}
      {title}
    </button>
  );
};

export default PrimaryBtn;
