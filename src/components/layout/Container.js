
function Container({children ,customStyle}){
    return(
        <div className={` w-full h-full overflow-auto bg-claro dark:bg-cinza  ${customStyle}`} >{children}</div>
    )
}

export default Container;