import React from "react";
const Button = ({ children, className, href }) => {
	return (
		<button
			className={`button w-fit rounded-lg px-9 text-white ${className}`}
			type="submit"
			name="button"
			value="Add to server"
		>
			<a href={href} target="_blank" className="font-bold" rel="noreferrer">{children}</a>
		</button>
	);
};
export default Button;
