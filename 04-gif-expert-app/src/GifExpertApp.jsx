import { useState } from 'react'
import { AddCategory } from './components/AddCategory.jsx'
import { GifGrid } from './components/GifGrid.jsx';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Prueba 1']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <div>

        <h1>GifExpertApp</h1>

        <AddCategory
            onNewCategory={onAddCategory}
        />

        {/* Principales cambios aqui */}
        {    
            categories.map( (category) => 
                <GifGrid
                    key={category}
                    category={category}
                />
            )
        }

    </div>
  )
}

//OJEaO557Zklb4ckEzP79mOs74z2MG96L