function Input({type, value,name, onchange, placeholder, customStyle}) {
    return(
        <input
        autoComplete="off"
            className={`max-w-96 p-3 border-none outline-none hover:shadow-lg hover:shadow-gray-600 dark:hover:shadow-slate-900 ${customStyle}`} 
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