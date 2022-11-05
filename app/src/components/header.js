import React from "react";
const Header = ({ children, className }) => {
	return (
		<p className={`${className} text-[30px] md:text-[70px] md:px-[100px] lg:px-[200px] sm:px-[10] font-extrabold text-center`}>
			{children}
		</p>
	);
};

export default Header;
