import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => 
{
    const [categories, setCategories] = useState(["One Punch", "DBZ"]);

    const onNewCategory= (newCategory) => {
        if(categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }
    
    return (
        <>
            <h1>GiftExpertApp</h1>

            <AddCategory onNewCategory={ onNewCategory }/>

            <ol>
                { 
                    categories.map((category,i) => <GifGrid key={category} category={category}  />)
                }
            </ol>

        </>
    );
}