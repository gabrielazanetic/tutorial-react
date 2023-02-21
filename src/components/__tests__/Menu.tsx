import renderer from "react-test-renderer";
import MenuItem from "../MenuItem";
import withDropDown from "../withDropDown";
import Menu from "../Menu";
import { MemoryRouter, NavLink } from "react-router-dom";

it("changes class when hovered", () => {
	const SubMenu = withDropDown(Menu);

	const menuItem = renderer.create(
		<MemoryRouter initialEntries={["/"]}>
			<SubMenu title={<NavLink to="/">Home</NavLink>} collapsed={true}>
				<MenuItem>Step 1</MenuItem>
				<MenuItem>Step 2</MenuItem>
				<MenuItem>Step 3</MenuItem>
				<MenuItem>Step 4</MenuItem>
				<MenuItem>Step 5</MenuItem>
			</SubMenu>
		</MemoryRouter>
	);

	let tree: any = menuItem.toJSON();

	expect(tree).toMatchSnapshot();

	renderer.act(() => {
		tree.children[0].props.onMouseEnter();
	});

	tree = menuItem.toJSON();
	expect(tree).toMatchSnapshot();

	renderer.act(() => {
		tree.props.onMouseLeave();
	});

	tree = menuItem.toJSON();
	expect(tree).toMatchSnapshot();
});
