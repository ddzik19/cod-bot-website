import React from "react";
const Label = ({children, className, for_name}) => {
    return(
        <label className={`${className} px-10 text-[#ffa100] font-bold`} for={for_name}>{children}</label>
    )
}

export default Label;