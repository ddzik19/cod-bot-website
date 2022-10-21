const ContentBlock = ({children, className}) => {
    return(
    <div className={`md:mx-[250px] py-5 ${className}`}>
        {children}
    </div>)
}

export default ContentBlock;