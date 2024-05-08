import React from "react";

interface PropsType {
  className?: string | undefined 
  stroke?: string | undefined
  onClick: any
}

const BackArrow = ({className, stroke, onClick}: PropsType) => {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M11 6L5 12M5 12L11 18M5 12H19"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackArrow;
