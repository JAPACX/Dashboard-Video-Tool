import React from "react";
import { Progress } from "antd";

const ProgressBar: React.FC<{ percent: number; showInfo?: boolean }> = ({
  percent,
  showInfo,
}) => {
  return (
    <>
      <Progress percent={50} showInfo={showInfo} />
    </>
  );
};

export default ProgressBar;
