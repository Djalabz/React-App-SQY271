function Input({ type, name, inputValue, onChange }) {
    return ( 
        <input 
            type={type} 
            name={name} 
            placeholder={"Ici votre " + name} 
            value={inputValue.email}
            onChange={onChange}
            required
        />
     )
}

export default Input 