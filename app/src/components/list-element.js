const List = ({href, children}) => {
    return(
        <li className="p-2 md:hover:cursor-pointer md:hover:text-white">
            <a href={href}>{children}</a>
        </li>
    )
}

export default List;