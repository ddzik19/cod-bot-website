import React from "react";
const List = ({href, children}) => {
    return(
        <li className="p-2 md:hover:cursor-pointer md:hover:text-white">
            <a target="_blank" href={href} rel="noreferrer">{children}</a>
        </li>
    )
}

export default List;