function Button({text, customStyle}) {
    return(
        <button className={` w-80 max-xs:w-64  p-3 rounded-xl bg-verde-escuro text-white hover:scale-105 hover:bg-opacity-80 ${customStyle}`} >
            {text}
        </button>
    ) 
}

export default Button