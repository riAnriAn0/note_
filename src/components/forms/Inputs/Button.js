function Button({text, customStyle}) {
    return(
        <button className={customStyle} >
            {text}
        </button>
    ) 
}

export default Button