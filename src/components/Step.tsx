import { FC } from "react";

interface StepProps {
    step: any
}

const Step: FC<StepProps> = ({ step }) => {
    return (
        <div id={`step-${ step.id }`} className="step">
            <h2>Step #{ step.id } - { step.title }</h2>
            <div>{ "image placeholder" }</div>
            <div>
            { step.text }
            </div>
        </div>
    );
};

export default Step;