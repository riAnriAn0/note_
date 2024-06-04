function Input({type, value,name, onchange, placeholder, customStyle}) {
    return(
        <input
            className={`max-w-96 p-3 border-none outline-none hover:shadow-lg ${customStyle}`} 
            type={type}
            name={name}
            id={name}
            onChange={onchange}
            placeholder={placeholder}  
            value={value}  
        />
    ) 
}

export default Input