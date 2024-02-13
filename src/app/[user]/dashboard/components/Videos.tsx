import React from "react";

interface Props {
  title: string;
  icon: string;
  size: string;
  lastModified: string;
}

const Videos: React.FC<Props> = ({
  title,
  icon,
  size,
  lastModified,
}: Props) => {
  return (
    <div className="grid grid-cols-6 border-b-[1px] my-[20px]">
      <p className="col-span-3">{title}</p>
      <p className="col-span-1">{icon}</p>
      <p className="col-span-1">{size}</p>
      <p className="col-span-1">{lastModified}</p>
    </div>
  );
};

export default Videos;
