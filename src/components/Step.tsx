import { FC } from "react";

interface StepProps {
    step: any
}

const Step: FC<StepProps> = ({ step }) => {
    const text = step.text.map((lineOfText: string, index: number) => {
        return <p key={"text-" + step.id + "-" + index}>{lineOfText}</p>;
    });

    let code = "";

    if(step.code) {
        code = step.code.map((lineOfCode: string, index: number) => {
            return <div key={"text-" + step.id + "-" + index}><code>{lineOfCode}</code></div>;
        });
    }

    return (
        <div id={`step-${ step.id }`} className="step">
            <h2 className="step__title">Step #{ step.id } - { step.title }</h2>
            <div className="step__text">{text}</div>
            <div className="step__code">{code}</div>
        </div>
    );
};

export default Step;