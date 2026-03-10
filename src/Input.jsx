function Input({ type, name, inputValue, onChange }) {
    return ( 
        <input 
            type={type} 
            name={name} 
            placeholder={"Ici votre " + name} 
            value={inputValue[name]}
            onChange={onChange}
            required
        />
     )
}

export default Input 