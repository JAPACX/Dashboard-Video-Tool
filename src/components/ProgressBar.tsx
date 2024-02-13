import React from "react";

export const ProgressBar: React.FC<{ percent: number; title: string }> = ({
  percent,
  title,
}) => {
  const barWidth = `${percent}%`;

  return (
    <div className="flex flex-col w-full">
      <p className="text-sm">{title}</p>
      <div className="h-[10px] relative w-full bg-[#7E4EFF] rounded">
        <div
          className=" h-[10px] bg-[#4702FF] rounded"
          style={{ width: barWidth }}
        ></div>
      </div>
    </div>
  );
};
