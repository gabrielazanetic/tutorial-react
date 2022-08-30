import { FC, useEffect, useState } from "react";
import breakpoints from "../utils/breakpoints";
import { useLinks } from "../utils/hooks";
import Accordion from "./Accordion";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const JumpToSection: FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const links = useLinks("tutorial-jump");

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize) 
    });

    
    const scrollToStep = (e?: any) => {
        e?.preventDefault();

        const stepNumber = e?.target.attributes["data-step"].value;
        const step = document.querySelector(`#step-${stepNumber}`);
        step?.scrollIntoView();
    };

    const menuItems = links.map((link: any) => {
        return <MenuItem key={link.id}>
            <a onClick={scrollToStep} {...link}>{link.title}</a>
        </MenuItem>
    });
    
    return (
        <div className="jump-to-section">
            {
                windowWidth <= breakpoints.tablet
                ? <>
                    <Accordion title="Steps">
                        <Menu >
                            {menuItems}
                        </Menu>
                    </Accordion>
                </>
                : <Menu>
                    {menuItems}
                </Menu>
            }
        </div>
    );
}

export default JumpToSection;