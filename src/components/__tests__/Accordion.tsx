import { useAccordionData } from "../data/AccordionData";
import renderer from "react-test-renderer";

it("opens and closes accordion", () => {
	const accordion = useAccordionData();

	let tree: any = accordion.toJSON();
	expect(tree).toMatchSnapshot();

	console.log(tree.children);

	renderer.act(() => {
		tree.children[0].props.onClick();
	});

	tree = accordion.toJSON();
	expect(tree).toMatchSnapshot();

	renderer.act(() => {
		tree.children[0].props.onClick();
	});

	tree = accordion.toJSON();
	expect(tree).toMatchSnapshot();
});
