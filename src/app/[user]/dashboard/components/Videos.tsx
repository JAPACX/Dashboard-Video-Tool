import React from "react";

interface Props {
  title: string;
  amount: number;
  size: string;
  lastModified: string;
}

const Videos: React.FC<Props> = ({
  title,
  amount,
  size,
  lastModified,
}: Props) => {
  return (
    <div className="justify-center grid grid-cols-5 border-b-[1px] my-[30px] px-[10px]">
      <p className="col-span-2">{title}</p>
      <p className="col-span-1">{amount}</p>
      <p className="col-span-1">{size}</p>
      <p className="col-span-1">{lastModified}</p>
    </div>
  );
};

export default Videos;
