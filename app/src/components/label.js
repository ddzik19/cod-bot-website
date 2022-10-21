const Label = ({children, className, for_name}) => {
    return(
        <label className={`${className} `} for={for_name}>{children}</label>
    )
}

export default Label;