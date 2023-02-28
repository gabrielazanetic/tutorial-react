import { ChangeEventHandler, FC, forwardRef, Ref } from "react";
import styles from "./TextInput.module.css";

interface TextInputProps {
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
	type: string;
	name: string;
	ref: Ref<HTMLInputElement>;
}

const TextInput: FC<TextInputProps> = forwardRef<
	HTMLInputElement,
	TextInputProps
>((props, ref) => {
	return (
		<input
			className={styles.input}
			ref={ref}
			type={props.type}
			name={props.name}
			value={props.value}
			onChange={props.onChange}
		/>
	);
});

export default TextInput;
