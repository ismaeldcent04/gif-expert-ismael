import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((prevValue) => {
      return [newCategory, ...prevValue];
    });
  };
  return (
    <>
      {/* titulo  */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={onAddCategory} />
      {/* Listado de Gif */}

      {categories.map((category, i) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
