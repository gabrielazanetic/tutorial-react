import { FC } from "react";
import { steps as stepsData } from "../data/steps";
import Step from "./Step";

const StepList: FC = () => {
    const steps = stepsData.map((step: any) => {
        return <Step key={ step.id } step={ step } />;
    });

    return (
        <div className="step-list">{ steps }</div>
    );
};

export default StepList;