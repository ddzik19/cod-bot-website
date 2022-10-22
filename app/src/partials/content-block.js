import React from "react";
const ContentBlock = ({children, className}) => {
    return(
    <div className={`md:mx-[10%] py-5 ${className}`}>
        {children}
    </div>)
}

export default ContentBlock;