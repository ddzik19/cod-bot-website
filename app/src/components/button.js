const Button = ({children}) => {
	return (
		<button
			className="primary w-fit rounded-lg py-3 px-9 text-white"
			type="submit"
			name="button"
			value="Add to server"
		>
			<p className="font-bold">{children}</p>
		</button>
	);
};
export default Button;