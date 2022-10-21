const Input = ({placeholder, type, name, className}) => {
	return (
		<input
        className={`py-2 px-5 rounded-lg w-fit text-[#323443] ${className}`}
			type={type}
			name={name}
			placeholder={placeholder}
		/>
	);
};

export default Input;