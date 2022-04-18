// components
import React, { Fragment } from "react";
import StepperProgress from "../components/Steper";

export const AfterOrderProgress = ({}) => {
  return (
    <>
      {/* 商品を持ってればステッパー、なければないを表示
       */}
      <StepperProgress></StepperProgress>
      <div>商品は何もありません。</div>
    </>
  );
};
