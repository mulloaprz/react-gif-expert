import { useState } from "react";

export const AddCategory = ({onNewCategory}) => 
{
    const [inputValue, setInputValue] = useState("");

    const onInputChange = (event) => 
    {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const cleanInputValue = inputValue.trim();        
        if(cleanInputValue.length <= 1) return;
        onNewCategory(inputValue);        
        setInputValue("");
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar..." 
                value={inputValue}
                onChange={(event) => onInputChange(event) }/>
        </form>
    );
}