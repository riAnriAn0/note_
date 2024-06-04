
function Container({children ,customStyle}){
    return(
        <div className={` w-full h-full bg-claro dark:bg-cinza  ${customStyle}`} >{children}</div>
    )
}

export default Container;