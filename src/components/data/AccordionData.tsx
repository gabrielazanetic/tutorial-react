import renderer from "react-test-renderer";
import Accordion from "../Accordion";

export const useAccordionData = () => {
	return renderer.create(<Accordion title="accordion">Hello</Accordion>);
};
