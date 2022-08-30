import { FC, useState } from "react";

interface AccordionProps {
    title: string,
    children: any
}

const Accordion: FC<AccordionProps> = ({children, title}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = (e: any) => {
        e.preventDefault();

        const newIsOpen = !isOpen;
        setIsOpen(newIsOpen);
    }

    return (
        <>
            <div className="accordion">
                <div className="accordion__header" onClick={handleOnClick}><h3>{title}</h3></div>
                <div className={`accordion__body${isOpen ? " open" : ""}`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Accordion;