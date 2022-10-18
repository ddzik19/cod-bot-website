const Button = ({children}) => {
	return (
		<button
			className="flex inline w-fit bg-[#FFA100] rounded-lg py-3 px-9 text-white"
			type="submit"
			name="button"
			value="Add to server"
		>
			<p className="font-bold">{children}</p>
		</button>
	);
};
export default Button;