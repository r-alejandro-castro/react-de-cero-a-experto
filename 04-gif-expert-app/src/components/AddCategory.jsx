
import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = ({target}) => {  
      setInputValue( target.value );
  }

  const onSubmit = (event) => {
      event.preventDefault();

      const inputValueTrim = inputValue.trim();

      if (inputValueTrim.length <= 1) return;

      onNewCategory(inputValueTrim);

      setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        placeholder="Buscar un GIF"        
        value={inputValue}
        onChange={ onInputChange }
        />
    </form>
  )
}
