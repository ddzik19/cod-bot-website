import React from "react";
const Button = ({ children, className, href }) => {
	return (
		<button
			href={href}
			className={`button w-fit rounded-lg px-9 text-white ${className}`}
			type="submit"
			name="button"
			value="Add to server"
		>
			<p className="font-bold">{children}</p>
		</button>
	);
};
export default Button;
