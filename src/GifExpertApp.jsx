import React from 'react';
import { useState } from 'react';
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {

const [categories, setCategories] = useState(['Dragon Ball']);



  return (
    <>
    <header>
      <h1>GifExpert</h1>
      <AddCategory setCategories={setCategories} />
      </header>
      <hr />

      {categories.map( category => ( <GifGrid key={category} category={category} />
) )}

    <footer>WebApp made by <i>Albert Quevedo</i> &copy;</footer>
    </>
  )
}

export default GifExpertApp