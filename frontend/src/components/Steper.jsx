import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";

export default function StepperProgress() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["準備中", "調理中", "配送中", "完了"];
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography>
              ご注文ありがとうございました。レストランの評価をしてください。
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/restaurants"
              onClick={() => {
                setActiveStep(0);
              }}
            >
              Reset レストラン一覧へ戻る。
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                variant="contained"
                color="secondary"
                disabled={activeStep === 0}
                onClick={() => setActiveStep(activeStep - 1)}
              >
                時を戻す
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveStep(activeStep + 1)}
              >
                {activeStep === steps.length - 1 ? "完了" : "時を進める"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
