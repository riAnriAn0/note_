
function Container({children ,customStyle}){
    return(
        <div className={` w-full h-full bg-claro ${customStyle}`} >{children}</div>
    )
}

export default Container;