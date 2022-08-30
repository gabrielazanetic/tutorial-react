import { FC } from "react";
import { useSteps } from "../utils/hooks";
import Step from "./Step";

const StepList: FC = () => {
const stepsData = useSteps();

    const steps = stepsData.map((step: any) => {
        return <Step key={ step.id } step={ step } />;
    });

    return (
        <div className="step-list">{ steps }</div>
    );
};

export default StepList;